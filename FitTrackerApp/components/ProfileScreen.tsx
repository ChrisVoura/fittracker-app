import React, { useState }  from "react"; 
import{
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TextInput,
    TouchableOpacity,
    Alert,
    Switch
} from 'react-native';
import {styles, COLORES } from '../app/styles/AppStyles'; 
import { useObjetivo } from "../context/ObjetivoContext";
export const ProfileScreen: React.FC = () => {

    //Estados para las configuraciones
    const {objetivo, setObjetivo} = useObjetivo();
    const [nombre, setNombre] = useState<string>('Usuario');
    const [notificaciones, setNotificaciones] = useState<boolean>(true);
    const [modoOscuro, setmodoOscuro] = useState<boolean>(false);

    // Datos del perfil
    const datosUsuario = {
        diasUsandoApp: 10,
        totalComidas: 45,
        rachaMaxima: 15,
        fechaRegistro: 'Septiembre 2025',
    };

    const guardarCambios = () => {
        Alert.alert('¡Guardado!', 'Tu perfil ha sido actualizado correctamente', [
            { text: 'OK', style: 'default' },
        ]);
    };  

    const configuracionOpciones = [{
        titulo: 'Notificaciones',
        descripcion: 'Recibir recordatorios para registrar comidas',
        valor: notificaciones,
        onChange: setNotificaciones,
        tipo: 'switch'
    },
    {
        titulo: 'Modo oscuro',
        descripcion: 'Cambiar tema de la aplicación',
        valor: modoOscuro,
        onChange: setmodoOscuro,
        tipo: 'switch'
    }];

 return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        
        {/* Header */}
        <View style={[styles.header, { backgroundColor: COLORES.secundario }]}>
          <Text style={styles.title}>👤 Mi Perfil</Text>
          <Text style={styles.subtitle}>Configuración y estadísticas personales</Text>
        </View>

        {/* Información Personal */}
        <View style={[styles.formContainer, { backgroundColor: COLORES.fondo }]}>
          <Text style={styles.formTitle}>Información Personal</Text>
          
          <Text style={styles.inputLabel}>Nombre:</Text>
          <TextInput
            style={styles.input}
            value={nombre}
            onChangeText={setNombre}
            placeholder="Tu nombre"
          />
          
          <Text style={styles.inputLabel}>Objetivo diario de calorías:</Text>
          <TextInput
            style={styles.input}
            value={objetivo.toString()}
            onChangeText={(text) => setObjetivo(parseInt(text))}
            placeholder="0000"
            keyboardType="numeric"
          />
          
          <TouchableOpacity style={styles.addButton} onPress={guardarCambios}>
            <Text style={styles.addButtonText}>💾 Guardar Cambios</Text>
          </TouchableOpacity>
        </View>

        {/* Estadísticas Personales */}
        <View style={[styles.formContainer, { backgroundColor: COLORES.fondo }]}>
          <Text style={styles.formTitle}>📈 Tus Estadísticas</Text>
          
          <View style={styles.statsQuickPanel}>
            <View style={styles.statCard}>
              <Text style={[styles.statNumber, { color: COLORES.primario }]}>
                {datosUsuario.diasUsandoApp}
              </Text>
              <Text style={styles.statLabel}>Días usando la app</Text>
            </View>
            
            <View style={styles.statCard}>
              <Text style={[styles.statNumber, { color: COLORES.exito }]}>
                {datosUsuario.totalComidas}
              </Text>
              <Text style={styles.statLabel}>Comidas registradas</Text>
            </View>
          </View>

          <View style={styles.statsQuickPanel}>
            <View style={styles.statCard}>
              <Text style={[styles.statNumber, { color: COLORES.advertencia }]}>
                {datosUsuario.rachaMaxima}
              </Text>
              <Text style={styles.statLabel}>Racha máxima</Text>
            </View>
            
            <View style={styles.statCard}>
              <Text style={[styles.statNumber, { color: COLORES.accent }]}>
                {datosUsuario.fechaRegistro}
              </Text>
              <Text style={styles.statLabel}>Miembro desde</Text>
            </View>
          </View>
        </View>

        {/* Configuraciones */}
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>⚙️ Configuraciones</Text>
          
          {configuracionOpciones.map((opcion, index) => (
            <View key={index} style={[styles.foodItem, { paddingVertical: 20 }]}>
              <View style={styles.foodInfo}>
                <Text style={styles.foodName}>{opcion.titulo}</Text>
                <Text style={styles.foodSubtext}>{opcion.descripcion}</Text>
              </View>
              <Switch
                value={opcion.valor}
                onValueChange={opcion.onChange}
                trackColor={{ false: '#E0E0E0', true: COLORES.accent }}
                thumbColor={opcion.valor ? COLORES.fondo : '#f4f3f4'}
              />
            </View>
          ))}
        </View>

        {/* Sección de Logros */}
        <View style={[styles.formContainer, { backgroundColor: '#FFF8E1' }]}>
          <Text style={styles.formTitle}>🏆 Tus Logros</Text>
          
          <View style={styles.foodItem}>
            <View style={styles.foodInfo}>
              <Text style={styles.foodName}>Primera Semana</Text>
              <Text style={styles.foodSubtext}>Completaste tu primera semana</Text>
            </View>
          </View>

          <View style={styles.foodItem}>
            <View style={styles.foodInfo}>
              <Text style={styles.foodName}>Objetivo Alcanzado</Text>
              <Text style={styles.foodSubtext}>Cumpliste tu meta calórica 10 veces</Text>
            </View>
          </View>

          <View style={styles.foodItem}>
            <View style={styles.foodInfo}>
              <Text style={styles.foodName}>Registrador Constante</Text>
              <Text style={styles.foodSubtext}>45 comidas registradas</Text>
            </View>
          </View>
        </View>

        {/* Información de la App */}
        <View style={[styles.statsContainer, { backgroundColor: '#F3E5F5' }]}>
          <Text style={styles.statsTitle}>Información de la App</Text>
          <Text style={styles.statsText}>
            • Versión: 1.0.0{'\n'}
            • Desarrollado con React Native{'\n'}
            • Última actualización: Enero 2025{'\n'}
            • Política de privacidad: Tus datos se almacenan localmente
          </Text>
        </View>

        {/* Botones de Acción */}
        <View style={styles.statsQuickPanel}>
          <TouchableOpacity 
            style={[styles.addButton, { backgroundColor: COLORES.texto, flex: 1, marginRight: 10 }]}
            onPress={() => Alert.alert('Compartir', '¡Comparte FitTracker con tus amigos!')}
          >
            <Text style={styles.addButtonText}>🔗 Compartir App</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.addButton, { backgroundColor: COLORES.secundario, flex: 1, marginLeft: 10 }]}
            onPress={() => Alert.alert('Calificar', '¡Gracias! Tu opinión es importante')}
          >
            <Text style={styles.addButtonText}>⭐ Calificar</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
    );
};

export default ProfileScreen;