'use server';

import { client } from '@/app/_lib/client';
import { orders } from '@/app/data/mock/orders';
import { formatOrdersForPrompt } from '@/app/_utils/format/formatPropmpt';

export interface ChatProps {
  role: string;
  content: string;
}

function searchKnowledge(question: string) {
  const numberMatch = question.match(/\d{5,}/);

  if (!numberMatch) return [];
  const orderNumber = `#${numberMatch[0]}`;

  return orders.filter((order) => order.number === orderNumber);
}

export async function useOpenaiAction(message: string) {
  const related = searchKnowledge(message);
  const context = formatOrdersForPrompt(related);

  const prompt = `
    You are a professional e-commerce AI assistant.

    Instructions:
    - Always retrieve relevant information from the knowledge base before answering.
    - If relevant knowledge is found, your response must be grounded strictly in that knowledge.
    - Do not hallucinate or fabricate information beyond the knowledge base.
    - If no relevant knowledge is found, provide a helpful general response.
    - Detect the user's language and respond in the same language.

    Context from Knowledge Base:
    ------------------------------
    ${context}
    ------------------------------

    Use the above context to answer the user's question.
    If the context does not contain relevant information, you may provide a general answer.
  `;

  const res = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: prompt },
      { role: 'user', content: message },
    ],
  });

  return res.choices[0].message.content || '';
}
