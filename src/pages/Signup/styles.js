import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDFA',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'ios' ? 0 : 50,
  },
  title: {
    fontSize: 35,
    color: '#F16520',
    marginBottom: '20',
    fontWeight: 'bold',
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: -5,
    paddingTop: 10,
    marginLeft: '5%',
    marginRight: 'auto',
  },
  input: {
    width: '90%',
    height: 40,
    marginTop: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#1F0500',
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#EEE7D9',
  },
});

export default styles;