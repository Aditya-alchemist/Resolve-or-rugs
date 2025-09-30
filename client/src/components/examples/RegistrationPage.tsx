import RegistrationPage from '../RegistrationPage';

export default function RegistrationPageExample() {
  return (
    <RegistrationPage 
      onComplete={(name, email) => console.log('Registration complete:', { name, email })}
    />
  );
}
