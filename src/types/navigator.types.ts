export type AuthStackParams = {
  LaunchScreen: undefined;
  LoginScreen?: {
    setIsAuthenticated?: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export type MainStackParams = {
  Home: undefined;
  Profile: undefined;
};
