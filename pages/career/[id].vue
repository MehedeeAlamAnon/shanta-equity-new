<template>
  <section class="w-full relative h-709px">
    <img src="~/assets/images/bg-career.png" class="w-full h-full" />
    <div
      class="absolute top-0 bottom-0 flex w-full h-full breadcrumb-overlay justify-center items-center text-55px leading-normal font-light text-white uppercase text-center"
    >
      Build your career with Us
    </div>
  </section>
  <section class="pt-79px pb-106px">
    <!-- internal section start -->
    <div class="max-w-1050px mx-auto px-4 2xl:(px-0)" v-if="jobData">
      <div class="mb-63.96px">
        <h2 class="text-45px text-[#1F3C74] mb-20px">
          <span v-if="jobData.title">{{ jobData.title }}</span>
        </h2>
        <p class="text-25px font-light mb-20px">
          Vacancy: <span v-if="jobData.vacancy">{{ jobData.vacancy }}</span>
        </p>
        <p class="text-25px font-light">
          Deadline: <span v-if="jobData.deadline">{{ jobData.deadline }}</span>
        </p>
      </div>
      <div>
        <h3 class="text-25px text-[#1F3C74] capitalize mb-30px">
          {{ jobData.description }}
        </h3>
        <div class="grid md:(grid-cols-2) gap-50px">
          <!-- col start -->
          <div>
            <div class="mb-30px">
              <h4 class="text-18px font-semibold leading-25px mb-22px">
                Key Accountabilities
              </h4>
              <ul class="list-disc pl-20px">
                <li
                  class="text-18px leading-25px"
                  v-for="item in jobData.accountabilities"
                  :key="item.id"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
            <div>
              <h4 class="text-18px font-semibold leading-25px mb-22px">
                Skills, Knowledge and Competencies
              </h4>
              <ul class="list-disc pl-20px">
                <li
                  class="text-18px leading-25px"
                  v-for="item in jobData.skills"
                  :key="item.id"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
          <!-- col end -->
          <!-- col start -->
          <div>
            <div class="mb-30px">
              <h4 class="text-18px font-semibold leading-25px mb-22px">
                Work Experience
              </h4>
              <p class="text-18px leading-25px">
                {{ jobData.experiences }}
              </p>
            </div>
            <div>
              <h4 class="text-18px font-semibold leading-25px mb-22px">
                Education Requirement
              </h4>
              <p class="text-18px leading-25px">
                {{ jobData.educationRequirement }}
              </p>
            </div>
          </div>
          <!-- col end -->
        </div>
      </div>
    </div>
    <!-- internal section end -->
  </section>
  <section>
    <!-- internal section start -->
    <div class="max-w-1437px mx-auto mb-92px px-4 2xl:(px-0)">
      <h2
        class="max-w-1050px mx-auto text-45px text-[#1F3C74] font-light mb-69px px-4 xl:(px-0)"
      >
        Fill out the form below to apply
      </h2>
      <form action="">
        <div class="apply-card py-64px px-8 xl:(px-0)">
          <div class="max-w-1050px mx-auto">
            <div class="w-full mb-21px">
              <label
                for="career_summary"
                class="text-14px leading-18px mb-10px block"
              >
                Career Summary<span class="text-[#ff0000]">*</span>
              </label>
              <textarea
                type="text"
                name="career_summary"
                id="career_summary"
                class="form-control w-full h-124px border-1 border-[#1F3C74] pl-22px font-light"
              />
            </div>
            <div class="max-w-810px">
              <!-- form row start -->
              <div
                class="w-full mb-21px grid sm:(grid-cols-2) gap-30px xl:(gap-x-90px)"
              >
                <!-- form col start -->
                <div>
                  <label
                    for="full_name"
                    class="text-14px leading-18px mb-10px block"
                  >
                    Full Name<span class="text-[#ff0000]">*</span>
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    class="form-control w-full h-44px border-1 border-[#1F3C74] pl-22px font-light"
                  />
                </div>
                <!-- form col end -->
                <!-- form col start -->
                <div>
                  <label
                    for="full_name"
                    class="text-14px leading-18px mb-10px block"
                  >
                    Date of Birth<span class="text-[#ff0000]">*</span>
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    class="form-control w-full h-44px border-1 border-[#1F3C74] pl-22px font-light"
                  />
                </div>
                <!-- form col end -->
              </div>
              <!-- form row end -->
              <!-- form row start -->
              <div
                class="w-full mb-21px grid sm:(grid-cols-2) gap-30px xl:(gap-x-90px)"
              >
                <!-- form col start -->
                <div>
                  <label
                    for="email"
                    class="text-14px leading-18px mb-10px block"
                  >
                    Email<span class="text-[#ff0000]">*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    class="form-control w-full h-44px border-1 border-[#1F3C74] pl-22px font-light"
                  />
                </div>
                <!-- form col end -->
                <!-- form col start -->
                <div>
                  <label
                    for="phone"
                    class="text-14px leading-18px mb-10px block"
                  >
                    Phone<span class="text-[#ff0000]">*</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    class="form-control w-full h-44px border-1 border-[#1F3C74] pl-22px font-light"
                  />
                </div>
                <!-- form col end -->
              </div>
              <!-- form row end -->
            </div>
            <div class="max-w-810px mt-38px">
              <h4 class="text-35px text-[#1F3C74] mb-38px">Document</h4>
              <div>
                <p class="text-14px leading-18px mb-10px">Resume (PDF Only)*</p>
                <div class="grid sm:(grid-cols-2) gap-30px xl:(gap-x-90px)">
                  <div
                    class="border-1 border-[#1F3C74] py-8px pl-10px flex items-center"
                  >
                    <input
                      id="file_upload"
                      type="file"
                      name="myfile"
                      class="absolute opacity-0 -z-1"
                      hidden
                      @change="onFileChange"
                    />
                    <label
                      for="file_upload"
                      class="w-82px h-27px bg-[#D9D9D9] cursor-pointer inline-block leading-27px text-12px text-[#000] text-opacity-38 text-center mr-25px"
                      >Upload</label
                    >

                    <span
                      class="max-w-200px text-14px overflow-hidden whitespace-nowrap overflow-ellipsis"
                      >{{ fileName ? fileName : "No file Choosen" }}</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center mt-50px">
          <button
            type="submit"
            class="bg-[#1F3C74] w-177px h-60px text-white border-1 border-[#1F3C74] text-25px font-light"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    <!-- internal section end -->
  </section>
</template>

<script setup>
import openJobs from "@/assets/data/openJobs.js";
const { id } = useRoute().params;
const jobData = openJobs.find((data) => data.id == id);

const fileName = ref(null);
function onFileChange(e) {
  fileName.value = e.target.files[0].name;
}
</script>

<style lang="scss" scoped>
.breadcrumb-overlay {
  background: linear-gradient(
    90deg,
    #1f3c74 7.81%,
    rgba(31, 60, 116, 0.765625) 23.44%,
    rgba(31, 60, 116, 0.392976) 70.31%,
    rgba(31, 60, 116, 0) 100%
  );
}
.apply-card {
  background: #ffffff;
  box-shadow: 3px 3px 50px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
}
.form-control {
  &::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
}
.item {
  justify-content: center;
}
</style>
