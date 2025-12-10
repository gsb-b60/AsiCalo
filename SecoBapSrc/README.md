SECOBAP 

"SECOBAP" is a web-based fitness companion designed to help users track their workouts and manage their nutritional intake. This project aims to provide a simple yet effective tool for individuals on their fitness journey.
Table of Contents

    Features

    Technologies Used

    Future Enhancements

Features
Training Module (train.html)

    Countdown Timer: A customizable timer for managing rest periods between sets or timed exercises.

    Workout Log: Record details for each set, including:

        Set Number

        Exercise Name

        Weight

        Reps

        Reps In Reserve (RIR)

    Dynamic Set Addition: Easily add new sets to your workout log.

    Exercise Management: (Planned) Functionality to add new exercises.

Calories Calculator Module (calories.html)

    Food Selection: Browse and select food items from a predefined list.

    Dynamic Quantity Tracking: Adjust the quantity of selected food items.

    Real-time Macro Calculation: View real-time totals for Calories, Protein, Fat, and Carbohydrates based on selected foods and quantities.

    Persistent Selection: Your food selections are saved locally using Session Storage, so they persist even if you navigate away and return to the page.

    Food Item Details Integration: Seamlessly navigate to a detailed page for individual food items (e.g., from a search result or list).

Food Item Details (item.html)

    A dedicated page to display detailed nutritional information for a specific food item, often accessed via URL parameters from the calories calculator.

Technologies Used

    HTML5: For structuring the web pages.

    CSS3: For styling the application, utilizing:

        Custom CSS Variables (:root): For a consistent and easily manageable color palette.

        Flexbox & Media Queries: For responsive layouts that adapt to various screen sizes (mobile, tablet, desktop).

        Custom Form Element Styling: For checkboxes and input fields.

    JavaScript (ES6+): For all interactive functionalities, including:

        DOM manipulation

        Event handling

        Data persistence using sessionStorage

        Dynamic content generation

        URL parameter parsing and manipulation (URLSearchParams, history.replaceState)

    Google Fonts: Inter for general text and Orbitron for a digital clock aesthetic.

Usage
Training Page (train.html)

    Use the + and - buttons to adjust the timer duration(1 min).

    Click Start to begin the countdown and Pause to stop it.

    you can use - button to force close it

    The "Workout Log" section allows you to manually input details for each set.

    Click "ADD SET" to add a new row to your workout log.

Calories Calculator Page (calories.html)

    The page will display a list of food items.

    Select Food: Click on a food item's checkbox to select it. Selected items will move to the top of the list.

    Update Quantity/Macros: If you navigate to item.html from a food item (e.g., by clicking its name, not the checkbox) and return with URL parameters, the selected food's quantity and macros will be updated.

    Deselect Food: Uncheck a food item's checkbox to remove it from your selection. It will move back to its original position in the list.

    View Totals: The "Your Daily Totals" section will dynamically update with the sum of calories, protein, fat, and carbohydrates from all selected food items.

    Log Food: Click the "Log food" button (bottom right) to see a console log of your current selections.

Future Enhancements

    User Authentication: Implement user accounts to save and retrieve workout logs and food selections across sessions and devices.

    Database Integration: Store workout and food data in a persistent database (e.g., Firebase Firestore) instead of sessionStorage.

    Advanced Workout Tracking:

        Ability to create custom exercises.

        Track workout history and progress over time.

        Graphing and visualization of performance metrics.

    Enhanced Calorie Calculator:

        Search functionality for food items.

        Ability to add custom food items.

        Meal planning features.

        Integration with external food databases.

    Responsive Design Refinement: Further optimize layouts for a wider range of devices and orientations.

    UI/UX Improvements: Add animations, transitions, and more interactive elements.

    Error Handling & Validation: More robust input validation and user feedback.
