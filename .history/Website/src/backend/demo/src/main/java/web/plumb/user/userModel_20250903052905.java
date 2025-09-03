package web.plumb.user;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "`user`")
public class UserModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // ID should be declared with annotations here

    private String fName;
    private String lName;
    private String email;
    private String password;
    private Long phoneNum;
    private String address;
    private String postCode;

    public UserModel() {
    }

    public UserModel(String firstName, String lastName, String email, String password, Long phoneNumber,
            String address, String postCode) {
        this.fName = firstName;
        this.lName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNum = phoneNumber;
        this.address = address;
        this.postCode = postCode;
    }

    // Getters and setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return fName;
    }

    public void setFirstName(String firstName) {
        this.fName = firstName;
    }

    public String getLastName() {
        return lName;
    }

    public void setLastName(String lastName) {
        this.lName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getPhoneNumber() {
        return phoneNum;
    }

    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNum = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }
}
