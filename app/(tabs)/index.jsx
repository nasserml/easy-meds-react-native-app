import { View, Text, Button, FlatList } from 'react-native';
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/FirebaseConfig';
import { RemoveLocalStorage } from '../../service/Storage';
import { useRouter } from 'expo-router';
import Header from '../../components/Header';
import EmptyState from '../../components/EmptyState';
import MedicationList from '../../components/MedicationList';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <FlatList
      data={[]}
      ListHeaderComponent={
        <View
          style={{
            padding: 25,
            backgroundColor: 'white',
            height: '100%',
            width: '100%',
          }}
        >
          <Header />
          {/* <EmptyState /> */}
          <MedicationList />
        </View>
      }
    />
  );
}
