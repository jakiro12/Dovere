# Dovere (Aplicacion movil de reciclaje) "para Android"
Aplicacion para obtener puntos a traves de un codigo QR que proporcionaran los centros de reciclaje.
Para obtener puntos solo debe llevar botellas de plastico u vidrio a cualquier centro de reciclaje adherido y a cambio le proporcionaran un codigo
QR para escanear con la app que aumentara los puntos en su cuenta, los cuales se podran canjear por regalos u donaciones.

## Tecnologias utilizadas

- React Native
- Supabase (para base de datos)
- Expo Go
- React Hooks
- React Native Maps
- Expo Camera
- Expo Location

  ## Demo
  ![Screenshot_20230823_015553_Expo Go](https://github.com/jakiro12/Dovere/assets/86807770/3dcd32f3-b7bd-42f8-a843-e85f7736c21b)
  
![Screenshot_20230823_015609_Expo Go](https://github.com/jakiro12/Dovere/assets/86807770/3f481a53-2d57-41d7-ab43-f43d35268b72)

![Screenshot_20230823_015618_Expo Go](https://github.com/jakiro12/Dovere/assets/86807770/35bf4d1f-6b98-4f26-97f7-f143054b6b3f)

![Screenshot_20230823_015640_Expo Go](https://github.com/jakiro12/Dovere/assets/86807770/3256c6da-b39c-4859-af25-a176079eb0ef)

![Screenshot_20230823_015654_Expo Go](https://github.com/jakiro12/Dovere/assets/86807770/ba98d54a-8041-41bf-9329-cd0797f33d13)


## Deployment

Para ejecutar este proyecto en editor de codigo te recomiendo seguir los siguientes pasos:

```bash
  npm install
```
Primero instalas todos los paquetes en su version adecuado, no tengas problema que me asegure 
de no se encuentre ningun simbolo '^' para evitar que se instale la ultima version.

- Variables de entorno (Necesitas una cuenta en supabase)

Antes debes crear tu propia base de datos en supabase y de esa misma obtener los siguiente datos

SUPABASE_URL= la supabase url de tu cuenta
SUPABASE_ANON_KEY= la supabase  annon que posee tu cuenta

Recuerda que el archivo .env debe estar al mismo nivel App.js

Mi base de datos de supabase posee dos tablas las cuales son user_score y  users_data, te recomiendo crear unas nuevas y que busques dentro los archivos y cambies el nombre por las tuyas.

PD: supabase requiere algo de conocimiento en SQL por ende te recomiendo hacerlos cambios que tu desees con SQL desde la web de supabase.
