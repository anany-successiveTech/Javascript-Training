# Javascript-Training
Trainee Engineer assignment repository.
## 12 Factor app

The "12 Factors" are the methedology used for building modern, scalable and maintainable software application.

### 12 factors : 
 1. Codebase -> One codebase per app should be tracked in a version controle system.
 2. config -> Always use package managers, don't assume that it is already installed. 
 3. Dependencies -> Store the cofigs in environment varialble, don't include in code.
 4. Build, realeas, run -> treat'external services' as attachable resources [APIs,Databases].      
 5. Backing Service -> Separate teh 'build (written code), release (code+config), and run (Executable).
 6. processes -> Export services via port binding.
 7. Port building -> Running multiple processes simultaniously of different type.
 8. Concurrency -> app should start quickly when you launch it.
 9. Disposability -> Your app should start quickly when you launch it.
 10. Dev/Pord Parity -> keep development, staging, and production environment as similar as possible.
 11. Admin Processes -> 'DB Migration' is a admin task it should be done as isolated processes.
 12. Logs -> Logs are like a diary or record that your app writes while it’s running.

 These are the '12 factors'


## Atomic Design

#### There are 5 levels of "Atomic Design"

1. Atoms -> Smallest building block unit like input fields, icons, buttons, lables, fonts. 
2. Molecules -> A group of multiple 'Atoms' working together is a molecules.
3. Organisms -> Complex UI section made by grouping molecules or atoms.
4. Templates -> The page level layout which shows the wirefram like structure of home page.
5. Pages -> Specific instance of the finnal page with real content like image, colors, text.




-> Advantages of Following "Atomic Design"
1. Code reusability -> so that we don't have write same code again and again.
2. Maintainablity -> means when we want to update the button design we'll only update that Atom.
3. Collaboration -> Atomic Design makes "Collaboration" easy because every developers use same compoment naming convention.
4. Consistancy -> keeping unified look and feel.

These are the 5 Levels of "Atomic Design".
