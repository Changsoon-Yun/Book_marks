import { InputFormProps } from '@/types/props/AuthProps';
import { FormControl, FormLabel, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function InputForm({ id, isRequired, inputType, inputRef, setInputType, label }: InputFormProps) {
  return (
    <FormControl id={id} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <InputGroup>
        <Input
          pr={typeof inputType === 'boolean' ? '4.5rem' : 4}
          type={inputType === 'text' ? 'text' : inputType ? 'text' : 'password'}
          ref={inputRef}
          maxLength={20}
        />
        {inputType !== 'text' && (
          <InputRightElement width='4.5rem'>
            <IconButton
              bgColor={'transparent'}
              _hover={{ backgroundColor: 'transparent' }}
              cursor={'pointer'}
              h='1.75rem'
              size='sm'
              aria-label={'eye'}
              icon={
                inputType ? (
                  <AiOutlineEye style={{ height: '70%', width: '70%' }} />
                ) : (
                  <AiOutlineEyeInvisible style={{ height: '70%', width: '70%' }} />
                )
              }
              onClick={() => setInputType?.toggle()}
            />
          </InputRightElement>
        )}
      </InputGroup>
    </FormControl>
  );
}
