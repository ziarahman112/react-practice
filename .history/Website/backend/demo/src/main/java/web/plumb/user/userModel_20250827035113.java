package main.java.web.plumb.user;

public class UserModel {

    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private Integer phoneNumber;
    private String address;
    private String postCode;

    public UserModel() {

    }

    public UserModel(String firstName, String lastName, String email, String password, Integer phoneNumber,
            String address, String postCode) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.postCode = postCode;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public Integer getPhoneNumber() {
        return phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setPhoneNumber(Integer phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

}
