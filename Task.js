class Task {
    constructor(name,description)
    {
        this.name = name;
        this.description = description;
        this.timeStamp = new Date();

    }
    setName (name)
    {
        this.name = name;
    }
    setDescription (description)
    {
        this.description = description;
    }
    getName ()
    {
        return this.name;
    }
    getDescription ()
    {
        return this.description;
    }
}