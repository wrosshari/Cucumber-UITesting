Feature: Create category feature 

  @category
  Scenario Outline: Admin create new category (positive case)

    Given admin on the category page 
    When admin click tambah button
    When admin type category name : <catName> and description : <catDesc>
    Then showing toast success message : <message>

    Examples:
      | catName        | catDesc              | message             |
      | snack          | kemasan plastin      | item ditambahkan    |

  Scenario Outline: Admin create new category without category name (negative case)

    Given admin on the category page 
    When admin click tambah button
    When admin type description : <catDesc>
    Then showing warning message : <warningMessage>

    Examples:
      | catDescNeg           | warningMessage                       |
      | kemasan plastin      | "name" is not allowed to be empty    |