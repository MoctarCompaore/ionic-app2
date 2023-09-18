import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'bf.dclic.myapp.devweb',
  appName: 'MyApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
