import { Platform, StyleSheet } from 'react-native';
import { colors } from './colors';


// Estilos da tela inicial.
export const homeStyles = StyleSheet.create({
  companyName: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  registerButton: {
    marginBottom: 30,
  },

  sectionTitle: {
    color: colors.black,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});


// Estilos da tela de detalhes do imóvel.
export const detalhesImovelStyles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 160,
    marginBottom: 15,
  },

  image: {
    width: '100%',
    height: 280,
    borderRadius: 12,
    marginBottom: 20,
  },

  title: {
    color: colors.primary,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  description: {
    color: colors.black,
    fontSize: 17,
    lineHeight: 26,
    marginBottom: 20,
  },

  price: {
    color: colors.danger,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  deleteButton: {
    marginBottom: 15,
  },
});


// Estilos da tela de cadastro de imóvel.
export const cadastroImovelStyles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 160,
    marginBottom: 15,
  },

  title: {
    color: colors.primary,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  label: {
    color: colors.black,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    padding: 14,
    fontSize: 16,
    marginBottom: 20,
  },

  descriptionInput: {
    minHeight: 120,
    textAlignVertical: 'top',
  },

  button: {
    marginBottom: 15,
  },
});


// Estilos do componente Button.
export const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dangerButton: {
    backgroundColor: colors.danger,
  },

  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});


// Estilos do componente ImovelCard.
export const imovelCardStyles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',

    // Sombra no Android
    elevation: 3,

    // Sombra no iOS
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  cardPressed: {
    opacity: 0.8,
  },

  image: {
    width: '100%',
    height: 200,
  },

  content: {
    padding: 16,
  },

  title: {
    color: colors.primary,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  description: {
    color: colors.black,
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 10,
  },

  price: {
    color: colors.danger,
    fontSize: 18,
    fontWeight: 'bold',
  },
});


// Estilos do componente ScreenContainer.
export const screenContainerStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  scrollContent: {
    padding: 20,

    // No Web, remove o espaçamento lateral
    // para permitir que o conteúdo ocupe toda a largura.
    ...(Platform.OS === 'web' && {
      paddingLeft: 0,
      paddingRight: 0,
    }),

    // Permite que o conteúdo cresça conforme necessário
    flexGrow: 1,
  },

  content: {
    flex: 1,
    padding: 20,
  },
});

// Estilos do componente Banner.
export const bannerStyles = StyleSheet.create({
  banner: {
    width: '100%',
    height: 160,
    marginBottom: 15,
  },
});