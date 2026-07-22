const fileInput = document.getElementById("fileInput");
const totalKontak = document.getElementById("totalKontak");

let contacts = [];

fileInput.addEventListener("change", function (e) {

    const file = e.target.files[0];

        if (!file) return;

            const reader = new FileReader();

                reader.onload = function (event) {

                        const data = new Uint8Array(event.target.result);

                                const workbook = XLSX.read(data, { type: "array" });

                                        const sheet = workbook.Sheets[workbook.SheetNames[0]];

                                                contacts = XLSX.utils.sheet_to_json(sheet);

                                                        totalKontak.innerText = contacts.length;

                                                                console.log(contacts);

                                                                        alert("Berhasil membaca " + contacts.length + " kontak.");

                                                                            };

                                                                                reader.readAsArrayBuffer(file);

                                                                                });