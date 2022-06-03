import axios from 'axios';

import { Message } from '../models/Message';

axios.defaults.baseURL = '/api/';

enum Endpoints {
	MESSAGES = 'messages',
}

type FetchMessagesResponse = { messages: Message[] };

export async function fetchMessages(): Promise<Message[]> {
	const res = await axios.get<FetchMessagesResponse>(Endpoints.MESSAGES);
	return res.data.messages;
}

type SendMessageResponse = Message;

export async function sendMessage(message: string): Promise<Message> {
	const res = await axios.post<SendMessageResponse>(Endpoints.MESSAGES, { message });
	return res.data;
}