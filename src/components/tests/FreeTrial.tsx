import { Button } from '../ui/button';

const FreeTrial = () => {
  const handleRedirectToFreeTrial = () => {
    const redirectURL =
      'https://brokee.eu.auth0.com/login?state=hKFo2SBoYTdSa0h2WEJ3WU5QZFlOVWhPNlU5UWhZSVE2TDNOY6FupWxvZ2luo3RpZNkgTFJzRUItVXFMUm0yal9MMmZxVm8wM2NXWFFGQ0xKNlqjY2lk2SB2ZWFKVFF2OVZqTnlqRXBPQ3g3N1R5ckVlY1B2cHp5aw&client=veaJTQv9VjNyjEpOCx77TyrEecPvpzyk&protocol=oauth2&audience=https%3A%2F%2Fapp.brokee.io%2Fapi%2Fchallenges%2Fmetadata&redirect_uri=https%3A%2F%2Fbrokee.io&mode=signUp&scope=openid%20profile%20email&response_type=code&response_mode=query&nonce=MUNtc2pkb3J6Vk51aW9HMFNnX1ZsNDZpMGpwOFNhRC0yTzNyeldJZldNWA%3D%3D&code_challenge=8vrxHAOnH8nE0XpoBWaEgiCkrcjQuOpwDykuTxfePkA&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtcmVhY3QiLCJ2ZXJzaW9uIjoiMS4xMi4xIn0%3D';
    window.location.href = redirectURL;
  };

  return (
    <div className="flex">
      <div
        style={{
          borderRadius: '50%',
          maxWidth: '20rem',
          overflow: 'hidden',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          width: '300px',
          height: '300px',
        }}
      >
        <img
          className="w-full h-full"
          src={`./assets/devops.jpg`}
          alt="Start Free Trial"
        />
      </div>
      <div className="p-8 ml-16">
        <h2 className="text-xl font-semibold text-center mb-6 text-green-600">
          Get Started with DevOps Testing
        </h2>
        <p className="text-lg mb-12">Try Our Platform for Free!</p>
        <Button
          className="bg-yellow-300 p-6"
          onClick={handleRedirectToFreeTrial}
        >
          Start Free Trial
        </Button>
      </div>
    </div>
  );
};

export default FreeTrial;
