import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Alert
} from 'react-native';
import {styles , COLORES} from '../styles/AppStyles'; 


interface Comida {
  id: number;
  nombre: string;
  calorias: number;
  categoria: 'Desayuno' | 'Almuerzo' | 'Cena' | 'Merienda';
  hora: string;
}

interface NuevaComida {
  nombre: string;
  calorias: string;
  categoria: 'Desayuno' | 'Almuerzo' | 'Cena' | 'Merienda';
}


const App: React.FC = () => {
  // Estado con tipos definidos
  const [misComidas, setMisComidas] = useState<Comida[]>([]);
  
  const [nuevaComida, setNuevaComida] = useState<NuevaComida>({ 
    nombre: '', 
    calorias: '' ,
    categoria: 'Desayuno'
  });

  const [diasConsecutivos, setDiasConsecutivos] = useState<number>(7);

  const [rachaRecord, setRachaRecord] = useState<number>(15);
  
  const objetivo: number = 2000;

  // logica de la app
  const totalMisCalorias: number = misComidas.reduce((total, comida) => total + comida.calorias, 0);
  const filterMisComidas: Comida[] = misComidas.filter(comida => comida.calorias > 300);
  const caloriasRestantes: number = objetivo - totalMisCalorias;
  const promedioCalorias: number = misComidas.length > 0 ? totalMisCalorias / misComidas.length : 0;

  // Función para agregar nueva comida
  const agregarComida = (): void => {
    if (nuevaComida.nombre && nuevaComida.calorias) {
      const ahora = new Date();
      const hora = ahora.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      const comida: Comida = {
        id: Date.now(),
        nombre: nuevaComida.nombre,
        calorias: parseInt(nuevaComida.calorias),
        categoria: nuevaComida.categoria,
        hora: hora
      };
      setMisComidas([...misComidas, comida]);
      setNuevaComida({ nombre: '', calorias: '' , categoria: 'Desayuno'});
      
      Alert.alert('¡Éxito!', `${comida.nombre} agregada correctamente`);
    } else {
      Alert.alert('Error', 'Por favor completa todos los campos');
    }
  };

  // Función para eliminar comida
  const eliminarComida = (id: number): void => {
    Alert.alert(
      'Confirmar',
      '¿Estás seguro de eliminar esta comida?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { 
          text: 'Eliminar', 
          style: 'destructive',
          onPress: () => setMisComidas(misComidas.filter(comida => comida.id !== id))
        }
      ]
    );
  };
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        
        {/* Header de la App */}
        <View style={styles.header}>
          <Text style={styles.title}>🍎 FitTracker</Text>
          <Text style={styles.caloriesDisplay}>
            {totalMisCalorias} / {objetivo} cal
          </Text>
          <Text style={styles.subtitle}>
            {caloriasRestantes > 0 
              ? `Te faltan ${caloriasRestantes} calorías` 
              : '¡Objetivo cumplido! 🎉'
            }
          </Text>
        </View>

        {/* Barra de progreso */}
        <View style={styles.progressContainer}>
          <View 
            style={[
              styles.progressBar, 
              { 
                width: `${Math.min((totalMisCalorias / objetivo) * 100, 100)}%`,
                backgroundColor: caloriasRestantes > 0 ? '#4CAF50' : '#FF6B6B'
              }
            ]} 
          />
        </View>

        {/* Formulario para agregar comida */}
        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>Categoria</Text>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={[styles.categoryButton,
              nuevaComida.categoria === 'Desayuno' && styles.selectedButton
            ]} 
            onPress={() => setNuevaComida({...nuevaComida, categoria: 'Desayuno'})}
            >
              <Text style={[styles.buttonText,
                nuevaComida.categoria === 'Desayuno' && styles.selectedButtonText
              ]}>
                Desayuno
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.categoryButton,
              nuevaComida.categoria === 'Almuerzo' && styles.selectedButton
            ]} 
            onPress={() => setNuevaComida({...nuevaComida, categoria: 'Almuerzo'})}
            >
              <Text style={[styles.buttonText,
                nuevaComida.categoria === 'Almuerzo' && styles.selectedButtonText
              ]}>
                Almuerzo
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.categoryButton,
              nuevaComida.categoria === 'Cena' && styles.selectedButton
            ]} 
            onPress={() => setNuevaComida({...nuevaComida, categoria: 'Cena'})}
            >
              <Text style={[styles.buttonText,
                nuevaComida.categoria === 'Cena' && styles.selectedButtonText
              ]}>
                Cena
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.categoryButton,
              nuevaComida.categoria === 'Merienda' && styles.selectedButton
            ]} 
            onPress={() => setNuevaComida({...nuevaComida, categoria: 'Merienda'})}
            >
              <Text style={[styles.buttonText,
                nuevaComida.categoria === 'Merienda' && styles.selectedButtonText
              ]}>
                Merienda
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.formTitle}>Agregar Comida</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Nombre de la comida"
            value={nuevaComida.nombre}
            onChangeText={(text: string) => setNuevaComida({...nuevaComida, nombre: text})}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Calorías"
            value={nuevaComida.calorias}
            onChangeText={(text: string) => setNuevaComida({...nuevaComida, calorias: text})}
            keyboardType="numeric"
          />


          <TouchableOpacity style={styles.addButton} onPress={agregarComida}>
            <Text style={styles.addButtonText}>➕ Agregar Comida</Text>
          </TouchableOpacity>
        </View>

        {/* Lista de comidas */}
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Mis Comidas de Hoy</Text>
          
          {misComidas.length === 0 ? (
            <View>
              <Text style={styles.emptyTitle}>¡Aún no has agregado comidas!</Text>
              <Text style={styles.emptySubtitle}>Comienza agregando tu primera comida del día</Text>
            </View>
          ):(
            misComidas.map(comida => (
               <TouchableOpacity 
              key={comida.id}
              style={styles.foodItem}
              onLongPress={() => eliminarComida(comida.id)}
            >
              <View style={styles.foodInfo}>
                <Text style={styles.foodName}>{comida.categoria} - {comida.nombre}</Text>
                <Text style={styles.foodSubtext}>Mantén presionado para eliminar</Text>
              </View>
              <View style={[
                styles.caloriesBadge,
                { backgroundColor: comida.calorias > 300 ? COLORES.advertencia : COLORES.exito }
              ]}>
                <Text style={styles.caloriesText}>{comida.calorias} cal</Text>
              </View>
            </TouchableOpacity>
          ))
          )}
        </View>

        {/* Estadísticas */}
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>📊 Resumen del Día</Text>
          <Text style={styles.statsText}>
            • Comidas altas en calorías: {filterMisComidas.length}{'\n'}
            • Total consumido: {totalMisCalorias} calorías{'\n'}
            • Promedio por comida: {promedioCalorias} cal
          </Text>
        </View>
        <View style={styles.statsQuickPanel}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>{diasConsecutivos}</Text>
            <Text style={styles.statLabel}>Días seguidos</Text>
          </View>
        <View style={styles.statCard}>
            <Text style={styles.statNumber}>{misComidas.length}</Text>
            <Text style={styles.statLabel}>Comidas hoy</Text>
        </View>
        <View style={styles.statCard}>
            <Text style={styles.statNumber}>{rachaRecord}</Text>
            <Text style={styles.statLabel}>Racha días</Text>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


export default App;