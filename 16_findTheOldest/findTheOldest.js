const findTheOldest = function (arrayOfPeople) {
    function calculateAge(person) {
        if (person.yearOfDeath === null || person.yearOfDeath === undefined) {
            return new Date().getFullYear() - person.yearOfBirth;
        } else {
            return person.yearOfDeath - person.yearOfBirth;
        }
    }

    return arrayOfPeople.reduce((oldestPerson, currentPerson) => {
        if (calculateAge(oldestPerson) < calculateAge(currentPerson)) {
            oldestPerson = currentPerson;
        }
        return oldestPerson;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
