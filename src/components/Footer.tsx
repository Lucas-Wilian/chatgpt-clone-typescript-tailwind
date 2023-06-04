import { ChatMessageInput } from './ChatMessageInput';

type Props = {
  onSendMessage: (message: string) => void;
};

export const Footer = ({ onSendMessage }: Props) => {
  return (
    <footer className='w-full border-t border-t-gray-600 p-2'>
      <div className='max-w-4xl m-auto'>
        <ChatMessageInput onSend={onSendMessage} />
        <div className=''>
          Feito pela BLANK. Permitida a copia e uso para qualquer fim
          <br />
        </div>
      </div>
    </footer>
  );
};
