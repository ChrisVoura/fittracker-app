import React from 'react';
import{
    View,
    Text,
    ScrollView,
    SafeAreaView,
    Dimensions,
} from 'react-native';
import {styles , COLORES } from '../app/styles/AppStyles'; 

export const StatsScreen: React.FC = () => {
    
    //Datos simulados para las estadisticas
    const estadisticasSemanales ={
        totalCalorias: 14500,
        promedioDiario: 2071,
        mejorDia: 'Miercoles',
        diasCumplidos: 5,
        totalDias: 7
    };

    const comidasXCategoria = [ 
        {categoria: 'Desayuno', cantidad: 7, calorias: 2800},
        {categoria: 'Almuerzo', cantidad: 6, calorias: 4200},
        {categoria: 'Cena', cantidad: 5, calorias: 3500},
        {categoria: 'Merienda', cantidad: 8, calorias: 1200}
    ];

    const screenWidth = Dimensions.get('window').width;

return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        
        {/* Header */}
        <View style={[styles.header, { backgroundColor: COLORES.celeste }]}>
          <Text style={styles.title}>Estadísticas</Text>
          <Text style={styles.subtitle}>Tu progreso semanal</Text>
        </View>

        {/* Estadísticas Principales */}
        <View style={[styles.formContainer, { backgroundColor: COLORES.fondo }]}>
          <Text style={styles.formTitle}>Resumen de la Semana</Text>
          
          <View style={styles.statsQuickPanel}>
            <View style={styles.statCard}>
              <Text style={[styles.statNumber, { color: COLORES.primario }]}>
                {estadisticasSemanales.totalCalorias}
              </Text>
              <Text style={styles.statLabel}>Calorías Totales</Text>
            </View>
            
            <View style={styles.statCard}>
              <Text style={[styles.statNumber, { color: COLORES.exito }]}>
                {estadisticasSemanales.promedioDiario}
              </Text>
              <Text style={styles.statLabel}>Promedio Diario</Text>
            </View>
          </View>

          <View style={styles.statsQuickPanel}>
            <View style={styles.statCard}>
              <Text style={[styles.statNumber, { color: COLORES.accent }]}>
                {estadisticasSemanales.diasCumplidos}/{estadisticasSemanales.totalDias}
              </Text>
              <Text style={styles.statLabel}>Días Cumplidos</Text>
            </View>
            
            <View style={styles.statCard}>
              <Text style={[styles.statNumber, { color: COLORES.advertencia }]}>
                {Math.round((estadisticasSemanales.diasCumplidos / estadisticasSemanales.totalDias) * 100)}%
              </Text>
              <Text style={styles.statLabel}>Porcentaje Éxito</Text>
            </View>
          </View>
        </View>

        {/* Progreso Visual */}
        <View style={[styles.formContainer, { backgroundColor: COLORES.fondo }]}>
          <Text style={styles.formTitle}>Progreso del Objetivo</Text>
          
          <View style={styles.progressContainer}>
            <View 
              style={[
                styles.progressBar, 
                { 
                  width: `${(estadisticasSemanales.diasCumplidos / estadisticasSemanales.totalDias) * 100}%`,
                  backgroundColor: COLORES.exito
                }
              ]} 
            />
          </View>
          
          <Text style={[styles.selectionPreview, { textAlign: 'center', marginTop: 10 }]}>
            {estadisticasSemanales.diasCumplidos} de {estadisticasSemanales.totalDias} días completados
          </Text>
          
          <View style={[styles.emptyState, { backgroundColor: '#E8F5E8', borderStyle: 'solid' }]}>
            <Text style={[styles.emptyTitle, { color: COLORES.exito }]}>
              ¡Tu mejor día fue {estadisticasSemanales.mejorDia}!
            </Text>
            <Text style={[styles.emptySubtitle, { color: COLORES.exito }]}>
              Sigue así para mantener tu racha
            </Text>
          </View>
        </View>

        {/* Análisis por Categorías */}
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Análisis por Categorías</Text>
          
          {comidasXCategoria.map((categoria, index) => (
            <View key={categoria.categoria} style={styles.foodItem}>
              <View style={styles.foodInfo}>
                <Text style={styles.foodSubtext}>
                  {categoria.cantidad} comidas registradas
                </Text>
              </View>
              <View style={styles.caloriesBadge}>
                <Text style={styles.caloriesText}>{categoria.calorias}</Text>
                <Text style={[styles.foodSubtext, { margin: 0 }]}>cal total</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Consejos y Motivación */}
        <View style={[styles.statsContainer, { backgroundColor: '#FFF3E0' }]}>
          <Text style={[styles.statsTitle, { color: COLORES.advertencia }]}>
            💡 Consejos para Ti
          </Text>
          <Text style={[styles.statsText, { color: COLORES.texto }]}>
            • Tu categoría más frecuente: Meriendas ({comidasXCategoria[3].cantidad} veces){'\n'}
            • Mantén el equilibrio entre todas las comidas{'\n'}
            • ¡Vas por buen camino! Sigue registrando tus comidas{'\n'}
            • Próximo objetivo: 100% de días cumplidos
          </Text>
        </View>

        {/* Logros */}
        <View style={[styles.formContainer, { backgroundColor: '#F3E5F5' }]}>
          <Text style={styles.formTitle}>🏅 Logros Desbloqueados</Text>
          
          <View style={styles.foodItem}>
            <View style={styles.foodInfo}>
              <Text style={styles.foodName}>Racha de 7 Días</Text>
              <Text style={styles.foodSubtext}>¡Una semana completa registrando!</Text>
            </View>
          </View>

          <View style={styles.foodItem}>
            <View style={styles.foodInfo}>
              <Text style={styles.foodName}>Analista de Datos</Text>
              <Text style={styles.foodSubtext}>Más de 20 comidas registradas</Text>
            </View>
          </View>

          <View style={styles.foodItem}>
            <View style={styles.foodInfo}>
              <Text style={styles.foodName}>Objetivo Cumplido</Text>
              <Text style={styles.foodSubtext}>5 días alcanzando tu meta calórica</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default StatsScreen;