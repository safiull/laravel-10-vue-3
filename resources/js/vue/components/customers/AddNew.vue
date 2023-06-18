<template>
    <div class="row">
        <div class="col-12">
            <div class="row d-flex justify-content-between">
                <div class="col">
                    <h4>Add new customer</h4>
                </div>
                <div class="col text-end">
                    <router-link
                        :to="{ name: 'customers.index' }"
                        class="btn btn-sm rounded-pill btn-primary"
                        ><i class="bx bx-list-ul"></i> View List</router-link
                    >
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-xl">
            <div class="card mb-4">
                <div class="card-body">
                    <form class="">
                        <div class="row">
                            <div class="col-sm-6 mb-3">
                                <label
                                    class="form-label"
                                    for="basic-default-fullname"
                                    >Full Name</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="basic-default-fullname"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div class="col-sm-6 mb-3">
                                <label
                                    class="form-label"
                                    for="basic-default-company"
                                    >Company</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="basic-default-company"
                                    placeholder="ACME Inc."
                                />
                            </div>
                            <div class="col-sm-6 mb-3">
                                <label
                                    class="form-label"
                                    for="basic-default-email"
                                    >Email</label
                                >
                                <input
                                    type="text"
                                    id="basic-default-email"
                                    class="form-control"
                                    placeholder="yourmail@example.com"
                                    aria-label="john.doe"
                                    aria-describedby="basic-default-email2"
                                />
                            </div>
                            <div class="col-sm-6 mb-3">
                                <label
                                    class="form-label"
                                    for="basic-default-phone"
                                    >Phone No</label
                                >
                                <input
                                    type="text"
                                    id="basic-default-phone"
                                    class="form-control phone-mask"
                                    placeholder="658 799 8941"
                                />
                            </div>
                            <div class="col-sm-12 mb-3">
                                <label
                                    class="form-label"
                                    for="basic-default-message"
                                    >Message</label
                                >
                                <textarea
                                    id="basic-default-message"
                                    class="form-control"
                                    placeholder="Hi, Do you have a moment to talk Joe?"
                                ></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">
                                <i class='bx bx-save'></i> Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
