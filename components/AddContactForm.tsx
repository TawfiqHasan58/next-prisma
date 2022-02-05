import { useForm } from 'react-hook-form';
import Input from './Input';
import InputSpacer from './InputSpacer';

const FormError = ({ errorMessage }) => {
  return <p className="text-red-300 mt-1">{errorMessage}</p>;
};

interface AddContactFormProps {
  onSubmit: any;
}

export default function AddContactForm(props: AddContactFormProps) {
  const { register, handleSubmit } = useForm();
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(props.onSubmit)}>
      <InputSpacer>
        <Input
          placeholder="First Name"
          name="firstName"
          formRef={register}
        />
        {/* {errors.firstName && (
          <FormError errorMessage="First Name is required" />
        )} */}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Last Name"
          name="lastName"
          formRef={register}
        />
        {/* {errors.lastName && <FormError errorMessage="Last Name is required" />} */}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Email"
          name="email"
          formRef={register}
        />
        {/* {errors.email && <FormError errorMessage="Email is required" />} */}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Avatar"
          name="avatar"
          formRef={register}
        />
        {/* {errors.avatar && <FormError errorMessage="Avatar is required" />} */}
      </InputSpacer>

      <button
        className="bg-blue-500 rounded-md p-4 text-blue-100"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
