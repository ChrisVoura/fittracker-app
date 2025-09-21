import { StyleSheet } from 'react-native';

export const COLORES = {
  primario: '#FF6B6B',      
  secundario: '#4ECDC4',    
  accent: '#45B7D1',        
  fondo: '#F7F9FC',         
  texto: '#2C3E50',         
  exito: '#2ECC71',         
  advertencia: '#F39C12',  
  peligro: '#E74C3C', 
};

// Estilos
export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  header: {
    // background: 'linear-gradient(135deg, ' + COLORES.primario + ' 0%,' + COLORES.accent + ' 100%)',
    backgroundColor: COLORES.primario,
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    //Agregar shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  caloriesDisplay: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    marginTop: 5,
  },
  progressContainer: {
    backgroundColor: '#E8E8E8',
    borderRadius: 15,
    height: 12,
    marginBottom: 20,
    overflow: 'hidden',
    //Agregar borde
    borderWidth: 2,
    borderColor: '#DDD',
  },
  progressBar: {
    height: '100%',
    borderRadius: 15,
    //Agregar gradiente visual
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,

  },
  formContainer: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: '#ddd',
    marginBottom: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: COLORES.secundario,
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 5,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  listContainer: {
    marginBottom: 20,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  foodItem: {
    backgroundColor: 'white',
    padding: 18,
    marginBottom: 12,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //Agregar sombra
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 5,
    //Borde sutil
    borderLeftWidth: 4,
    borderLeftColor: COLORES.accent,
  },
  foodInfo: {
    flex: 1,
  },
  foodName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  foodSubtext: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  caloriesBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  caloriesText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  statsContainer: {
    backgroundColor: '#e8f5e8',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  statsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 10,
  },
  statsText: {
    fontSize: 14,
    color: '#2e7d32',
    lineHeight: 20,
  },
  statsQuickPanel:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 20,
  },
  statCard:{
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    //Agregar sombras
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber:{
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORES.texto,
  },
  statLabel:{
    fontSize: 12,
    color: '#7F8C8D',
    marginTop: 4,
    textAlign: 'center',
  },
  inputLabel:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,

  },
  buttonRow: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginBottom: 10,
},
categoryButton: {
  backgroundColor: '#F8F9FA',
  padding: 12,
  borderRadius: 8,
  marginHorizontal: 4,
  alignItems: 'center',
  borderWidth: 2,
  borderColor: '#E9ECEF',
},
selectedButton: {
  backgroundColor: COLORES.secundario,
  borderColor:  COLORES.secundario,
},
buttonText: {
  fontSize: 14,
  color: '#666',
  fontWeight: '500',
},
selectedButtonText: {
  color: '#ffffffff',
  fontWeight: 'bold',
},
selectionPreview: {
  fontSize: 12,
  color: '#666',
  marginBottom: 15,
  fontStyle: 'italic',
  textAlign: 'center',
},
emptyState: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: 40,
  paddingHorizontal: 20,
  backgroundColor: '#FAFAFA',
  borderRadius: 12,
  borderWidth: 2,
  borderColor: '#E0E0E0',
  borderStyle: 'dashed',
},
emptyTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#666',
  textAlign: 'center',
  marginBottom: 8,
},
emptySubtitle: {
  fontSize: 14,
  color: '#999',
  textAlign: 'center',
  lineHeight: 20,
},
titleContainer:{
  flexDirection: 'row',
  alignItems: 'center',
}
});