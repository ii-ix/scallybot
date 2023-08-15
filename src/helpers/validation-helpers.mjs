export async function validateFunctionModule(moduleToValidate) {
    try {
        if (typeof moduleToValidate !== 'object') {
            throw new Error('The provided module is not an object.');
        }

        const requiredProperties = ['data', 'execute'];
        const missingProperties = requiredProperties.filter(prop => !moduleToValidate[prop]);

        if (missingProperties.length > 0) {
            const missingPropsString = missingProperties.join(', ');
            const errorText = missingProperties.length === 1 ? 'property is missing' : 'properties are missing';
            throw new Error(`The provided module is missing the required ${errorText}: ${missingPropsString}`);
        }

        return true;
    } catch (error) {
        console.error(error.message);
        return false;
    }
}