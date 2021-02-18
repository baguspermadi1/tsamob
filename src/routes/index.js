import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {
  RegistrasiBuatAkun,
  RegistrasiBuatPassword,
  RegistrasiDataDiri,
  RegistrasiForm,
  RegistrasiNomorKendaraan,
  RegistrasiPendaftaranBerhasil,
  Login,
  LoginVerifikasiOTP,
} from '@pages';

const Stack = createStackNavigator();

const StackScreen = [
  {name: 'Registrasi Buat Akun', component: RegistrasiBuatAkun},
  {name: 'Registrasi Nomor Kendaraan', component: RegistrasiNomorKendaraan},
  {name: 'Registrasi Form', component: RegistrasiForm},
  {name: 'Registrasi Data Diri', component: RegistrasiDataDiri},
  {name: 'Registrasi Buat Password', component: RegistrasiBuatPassword},
  {
    name: 'Registrasi Pendaftaran Berhasil',
    component: RegistrasiPendaftaranBerhasil,
  },
  {name: 'Login', component: Login},
  {name: 'Login Verifikasi OTP', component: LoginVerifikasiOTP},
];

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        {StackScreen.map((item, index) => (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
