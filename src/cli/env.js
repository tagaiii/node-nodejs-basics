const parseEnv = () => {
  const envVars = Object.keys(process.env)
    .filter((key) => key.startsWith('RSS'))
    .reduce((acc, key) => {
      acc[key] = process.env[key];
      return acc;
    }, {});

  Object.keys(envVars).forEach((key) => console.log(`${key}=${envVars[key]}`));
};

parseEnv();
