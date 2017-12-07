export function matchValidator(fieldName) {
    let fcfirst;
    let fcSecond;
    console.log(fieldName);
    return function matchValidator(control) {
        if (!control.parent) {
            return null;
        }
        // INITIALIZING THE VALIDATOR.
        if (!fcfirst) {
            //INITIALIZING FormControl first
            fcfirst = control;
            fcSecond = control.parent.get(fieldName);
            console.log(fieldName);
            console.log(control.parent.get('password'));
            //FormControl Second
            if (!fcSecond) {
                throw new Error('matchValidator(): Second control is not found in the parent group!');
            }
            fcSecond.valueChanges.subscribe(() => {
                fcfirst.updateValueAndValidity();
            });
        }
        if (!fcSecond) {
            return null;
        }
        if (fcSecond.value !== fcfirst.value) {
            return {
                matchOther: true
            };
        }
        return null;
    };
}
//# sourceMappingURL=match-validator.js.map