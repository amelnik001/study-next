
interface WelcomeProps {
    name?: string;
}

function Welcome({name}: WelcomeProps) {
    return (
        <div className="text-center p-6">
          <h1 className="text-2xl font-bold text-blue-600">
            Добро пожаловать, {name || 'Гость'}!
          </h1>
        </div>
      );
  }
  
  export default Welcome;