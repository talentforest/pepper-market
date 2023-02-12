import { UseFormRegisterReturn } from 'react-hook-form';

interface ITextareaProps {
  placeholder: string;
  labelId?: 'description' | 'question';
  labelName?: '상세설명' | '질문하기';
  register?: UseFormRegisterReturn;
}

const Textarea = ({
  placeholder,
  labelId,
  labelName,
  register,
}: ITextareaProps) => {
  return (
    <div className='space-y-1 mb-3'>
      {labelId && (
        <label htmlFor={labelId} className='text-sm font-medium text-gray-600'>
          {labelName}
        </label>
      )}
      <textarea
        id={labelId}
        className='resize-none mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-orange-500 focus:ring-orange-500 '
        rows={4}
        placeholder={placeholder}
        {...register}
      />
    </div>
  );
};

export default Textarea;
