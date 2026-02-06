
import { useForm } from '../../hooks/useForm';
import { FormContext } from './FormContext';

/**
 * Main Form component using Compound Component Pattern
 */
export const Form = ({
  initialValues = {},
  onSubmit,
  validate,
  children,
  className = ''
}) => {
  const formState = useForm(initialValues, onSubmit, validate);

  return (
    <FormContext.Provider value={formState}>
      <form onSubmit={formState.handleSubmit} className={className} noValidate>
        {typeof children === 'function' ? children(formState) : children}
      </form>
    </FormContext.Provider>
  );
};
