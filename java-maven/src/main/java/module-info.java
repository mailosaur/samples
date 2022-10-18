module com.example.javademo1 {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.example.javademo1 to javafx.fxml;
    exports com.example.javademo1;
}