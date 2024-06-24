import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginBottom: 20,
    fontSize: 18,
    backgroundColor: '#f9f9f9',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 20,
  },
  containerSibling: {
    width: '80%',
    borderWidth: 4,
    borderColor: '#000',
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#fafafa',
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    width: '30%',
    marginVertical: 10,
    paddingVertical: 20,
    backgroundColor: '#ccc', 
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  operatorButton: {
    width: '30%',
    marginVertical: 10,
    paddingVertical: 20,
    backgroundColor: '#ccc', 
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  clearButton: {
    width: '30%',
    marginVertical: 10,
    paddingVertical: 20,
    backgroundColor: '#ccc', 
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  equalButton: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 20,
    backgroundColor: '#ccc', 
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    backgroundColor: '#444',
    color: 'white',
    padding: 12,
    borderRadius: 10,
    textAlign: 'center',
  },

  header: {
    marginLeft: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  purpleLabel: {
    width: 20,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8978A4',
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
  },

  movieList: {
    paddingLeft: 4,
    marginTop: 8,
  },

  backgroundImage: {
    marginRight: 4,
  },
  backgroundImageStyle: {
    borderRadius: 8,
  },
  movieTitle: {
    color: 'white',
  },
  gradientStyle: {
    padding: 8,
    height: '100%',
    width: '100%',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  rating: {
    color: 'yellow',
    fontWeight: '700',
  },

  responsiveImg: {
    opacity: 1,
    width: 'auto',
    height: 'auto',
    position: 'static',
    marginBottom: 300,
  }, 
  backdrop: {
    width: 280,
    height: 160,
  },
  poster: {
    width: 100,
    height: 160,
  },

  parSearch: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },

  parItem: {
    margin: 10,

  },
});

export { styles };