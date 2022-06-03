import React from 'react';
import './MessageList.css';
import { Message } from '../models/Message';
import MessageListItem from './MessageListItem';

type MessageListProps = {
	messages: Message[];
}

export default function MessageList ({ messages }: MessageListProps) {
	return (
		<div className="chat-messages">
			<ul className="message-list">
				{messages.map(msg => <MessageListItem key={msg.id} message={msg.message} sender={msg.sender} />)}
			</ul>
		</div>
	);
}
