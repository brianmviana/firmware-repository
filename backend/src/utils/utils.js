module.exports = {
    validate(firmware) {
        //nome_do_projeto_v0_0_1.bin
        let regexBin = RegExp(
            "[A-Za-z0-9_]{1,}_v[0-9]{1,9}_[0-9]{1,9}_[0-9]{1,9}.bin",
            "g"
        );
        let regexVersion = RegExp("[0-9]{1,9}.[0-9]{1,9}.[0-9]{1,9}", "g");

        let projectName = firmware.name.replace(/ /gi, "_");

        return (
            regexBin.test(firmware.name) &&
            regexVersion.test(firmware.version) &&
            firmware.project.includes(projectName)
        );
    }
};
