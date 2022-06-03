import React from 'react';
import './MessageListItem.css';

type MessageListItemProps = {
	// id: string;
	message: string;
	sender: string;
}

export default function MessageListItem ({ message, sender }: MessageListItemProps) {
	return (
		<li className={`chat-message chat-message--${sender}`}>
			<span className="chat-message-bubble">{message}</span>
		</li>
	);
}
