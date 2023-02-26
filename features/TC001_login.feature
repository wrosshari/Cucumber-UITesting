Feature: Login feature 

  @login      
  Scenario Outline: Admin login to kasirAja dashboard (positive case)

    Given admin on the login page 
    When admin input email : <email> and password : <password>
    Then url contain <pathName> and showing title kasirAja

    Examples:
      | email           | password             | pathName     |
      | samplexx@ex.com | 123adsfadf@          | dashboard    |

      
  Scenario Outline: Admin login to kasirAja dashboard with invalid email and password (negative case)

    Given admin on the login page 
    When admin input invalid email : <invalidEmail> and invalid password : <invalidPassword>
    Then showing alert message : <alertMessage>

    Examples:
      | invalidEmail           | invalidPassword             | alertMessage                                  |
      | samplexx@ex.xx         | 123adsfadf@!                | must be a valid email                         |
      | samplexx@ex.com        | 123adsfa111                 | Kredensial yang Anda berikan salah            |
