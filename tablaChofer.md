# Tabla **Chofer**
## Se importan las clases necesarias para la creación de la interfaz gráfica.
```
import javax.swing.*;
import javax.swing.table.DefaultTableModel;
import java.awt.*;

```
**Explicación:**
Se importan las librerias necesarias


```
public class TablaFrame extends JFrame {

    public TablaFrame() {
        setTitle("Tabla de Usuarios");
        setSize(500, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLocationRelativeTo(null); // Centrar ventana

        // Columnas de la tabla
        String[] columnas = {"ID", "Nombre", "Apellido"};

        // Datos de ejemplo
        Object[][] datos = {
                {1, "Juan", "Perez"},
                {2, "Maria", "Gomez"},
                {3, "Carlos", "Lopez"}
        };

        // Modelo de tabla
        DefaultTableModel modelo = new DefaultTableModel(datos, columnas);
        JTable tabla = new JTable(modelo);

        // Scroll para la tabla
        JScrollPane scrollPane = new JScrollPane(tabla);
        add(scrollPane, BorderLayout.CENTER);

        setVisible(true);
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new TablaFrame());
    }
}
```
**Explicación:**
La clase **TablaFrame** crea una ventana con una tabla para mostrar datos de usuarios usando la librería Swing .

**ConstructorTablaFrame :**
Configura la ventana con título, tamaño y posición centrada en la pantalla.

**Columnas y Datos :**
Define los nombres de las columnas ID, Nombre, y Apellido, junto con algunos datos de ejemplo.

**Modelo de Tabla :**
Utiliza la clase DefaultTableModelpara asociar los datos con las columnas.

**ComponenteJTable :**
Muestra los datos en formato tabular.

**Panel de desplazamiento :**
permite desplazarse por la tabla si los datos superan el tamaño visible.

**Método main :**
Lanza la aplicación creando una instancia de TablaFrame.