import React, { useState, useEffect} from 'react';
import {
View,
Text,
StyleSheet,
Animated,
Dimensions,
Easing,
Image

} from "react-native";
import {COLORES, styles} from '../app/styles/AppStyles';

interface SplashScreenProps {
    onfinish: () => void;
}

export const SplashScreens: React.FC<SplashScreenProps> = ({ onfinish }) => {
    //Definicion de los estados
    const [fadeAnim] = useState(new Animated.Value(0));
    const [scaleAnim] = useState(new Animated.Value(0.3));
    const [progressAnim] = useState(new Animated.Value(0));

    useEffect(() => {
        // Secuencia de animaciones
        const startAnimations =() => {
            // Fade in de logo
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            }).start();
        
        //Escala del logo
        Animated.spring(scaleAnim, {
            toValue: 1,
            tension: 50,
            friction: 8,
            useNativeDriver: true,
        }).start();
        //Progreso de carga
        setTimeout(() =>{
            Animated.timing(progressAnim, {
                toValue: 1,
                duration: 2000,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: false,
            }).start();
        }, 500);
        //Finalizar despues de 4 segundos
        setTimeout(() => {
            onfinish();
        }, 3000);
    };
        startAnimations();
    }, []);

    const screenWidth = Dimensions.get('window').width;
    
    return(
      <View style={splashStyles.container}>
      {/* Fondo con gradiente simulado */}
      <View style={splashStyles.gradientBackground} />
      
      {/* Logo y título principal */}
      <Animated.View
        style={[
          splashStyles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Image source={require('../assets/images/Gemini_Generated_Image_eiy0a7eiy0a7eiy0 (1).png')}
        style={({width: 300, height: 300})}/>
        <Text style={splashStyles.logoSubtitle}>
          Tu compañero de nutrición personal
        </Text>
      </Animated.View>

      {/* Barra de progreso */}
      <View style={splashStyles.progressContainer}>
        <Text style={splashStyles.loadingText}>Cargando tu experiencia...</Text>
        
        <View style={splashStyles.progressBar}>
          <Animated.View
            style={[
              splashStyles.progressFill,
              {
                width: progressAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '100%'],
                }),
              },
            ]}
          />
        </View>

        <Text style={splashStyles.versionText}>Versión 1.0</Text>
      </View>

     
      {/* Mensaje motivacional que cambia */}
      <Animated.View style={[splashStyles.motivationalContainer, { opacity: fadeAnim }]}>
        <Text style={splashStyles.motivationalText}>
            {'Tu salud es tu mayor inversión'}
            </Text>
      </Animated.View>
    </View>   
    );
};

const splashStyles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORES.fondo,
    position: 'relative',
  },
  gradientBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: `linear-gradient(135deg, ${COLORES.primario} 0%, ${COLORES.accent} 50%, ${COLORES.secundario} 100%)`,
    opacity: 0.1,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 80,
  },
  logoEmoji: {
    fontSize: 80,
    marginBottom: 20,
    textShadowColor: 'rgba(0, 0, 0, 0.1)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  logoTitle: {
    fontSize: 42,
    fontWeight: 'bold',
    color: COLORES.primario,
    marginBottom: 10,
    textAlign: 'center',
    letterSpacing: 2,
  },
  logoSubtitle: {
    fontSize: 16,
    color: COLORES.gris,
    textAlign: 'center',
    fontStyle: 'italic',
    paddingHorizontal: 40,
  },
  progressContainer: {
    position: 'absolute',
    bottom: 120,
    alignItems: 'center',
    width: '80%',
  },
  loadingText: {
    fontSize: 14,
    color: COLORES.gris,
    marginBottom: 15,
    textAlign: 'center',
  },
  progressBar: {
    width: '100%',
    height: 6,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 10,
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORES.azulOscuro,
    borderRadius: 3,
  },
  versionText: {
    fontSize: 12,
    color: COLORES.gris,
    opacity: 0.7,
  },
  decorativeElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  floatingEmoji: {
    position: 'absolute',
    fontSize: 24,
    opacity: 0.3,
  },
  motivationalContainer: {
    position: 'absolute',
    bottom: 60,
    paddingHorizontal: 40,
  },
  motivationalText: {
    fontSize: 14,
    color: COLORES.gris,
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 20,
  },
});

export default SplashScreens;