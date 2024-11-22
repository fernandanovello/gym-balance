import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'red',
  },
  workout: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
    color: 'yellow',
    fontWeight: 'bold',
  },
});
