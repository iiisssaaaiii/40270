# Conectar a la base de datos 

## Codigo en java para conectar con las base de datos

### Declaracion del paquete y librerias
```
package modelo.sql;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

```
**Explicacion:**  
Se hace referencia al paquete en donde está nuestra clase, despues importamos varias librerias


## Declaración de la clase MySQLConnect
### Declaracion de atributos necesarios
```
    private Connection conn;
    private String host = "localhost";
    private String port = "3306";
    private String db = "restaurant";
    private String username = "root";
    private String password = "COTe07";

    private static MySQLConnect connect;
```
**Explicación:**
Creamos los atributos necesarios para poder conectarnos a la base de datos, empezamos con un atributo conn, luego un atributo host(para el nombre del host que usamos)

###.

