import React, { useEffect, useRef, useState } from 'react';
import Codemirror from 'codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import socketIOClient from 'socket.io-client';
import ACTIONS from '../actions';

const Editor = ({ socketRef, roomId, onCodeChange, username }) => {
    const [users, setUsers] = useState([]);
    const editorRef = useRef(null);

    useEffect(() => {
        async function init() {
            editorRef.current = Codemirror.fromTextArea(
                document.getElementById('realtimeEditor'),
                {
                    mode: { name: 'javascript', json: true },
                    theme: 'dracula',
                    autoCloseTags: true,
                    autoCloseBrackets: true,
                    lineNumbers: true,
                }
            );

            editorRef.current.on('change', (instance, changes) => {
                const { origin } = changes;
                const code = instance.getValue();
                onCodeChange(code);
                if (origin !== 'setValue') {
                    socketRef.current.emit(ACTIONS.CODE_CHANGE, {
                        roomId,
                        code,
                    });
                }
            });
        }
        init();
    }, []);

    useEffect(() => {
        if (socketRef.current) {
            socketRef.current.on(ACTIONS.CODE_CHANGE, ({ code }) => {
                if (code !== null) {
                    editorRef.current.setValue(code);
                }
            });
        }

        return () => {
            socketRef.current.off(ACTIONS.CODE_CHANGE);
        };
    }, [socketRef.current]);

    useEffect(() => {
        const editor = document.getElementById('realtimeEditor');
        editor.addEventListener('input', (event) => {
            onCodeChange(event.target.value);
        });

        return () => {
            editor.removeEventListener('input', (event) => {
                onCodeChange(event.target.value);
            });
        };
    }, [onCodeChange]);

    return (
        <div className="h-full">
            <textarea id="realtimeEditor" className="w-full h-full resize-none"></textarea>
        </div>
    );
};

export default Editor;
