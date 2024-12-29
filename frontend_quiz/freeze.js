const defaultConfig = Object.freeze({
    apiUrl: "https://api.example.com",
    timeout: 5000,
});

const customConfig = Object.create(defaultConfig);
customConfig.apiUrl = "https://api.freeze.com";
console.log(customConfig.apiUrl);

const parent = {
    setName(name) {
        this.name = name;
    },
};

const child = Object.create(parent);
Object.freeze(child);
