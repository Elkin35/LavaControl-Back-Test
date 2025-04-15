import "./App.css";

function App() {
  return (
    <div className="w-[1241px] h-[780px] relative bg-white/75 rounded-2xl shadow-[0px_16px_48px_0px_rgba(227,235,251,1.00)] outline outline-1 outline-offset-[-1px] outline-slate-200 backdrop-blur-[50px] overflow-hidden">
      <div className="left-[140px] top-[226px] absolute inline-flex flex-col justify-start items-start gap-14">
        <div className="flex flex-col justify-start items-start gap-8">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="inline-flex justify-start items-center gap-2">
              <div className="justify-start text-blue-950 text-base font-medium font-['Euclid_Circular_B']">
                İsim Soyisim
              </div>
              <div className="w-4 h-4 rounded-full outline outline-1 outline-offset-[-0.50px] outline-slate-400" />
              <div className="w-px h-2 bg-slate-400" />
            </div>
            <div className="w-96 h-12 relative bg-gray-50 rounded-lg border border-slate-200" />
          </div>
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="inline-flex justify-start items-center gap-2">
              <div className="justify-start text-blue-950 text-base font-medium font-['Euclid_Circular_B']">
                Kart Numarası
              </div>
              <div className="w-4 h-4 rounded-full outline outline-1 outline-offset-[-0.50px] outline-orange-500" />
              <div className="w-px h-2 bg-orange-500" />
            </div>
            <div className="w-96 h-12 relative bg-rose-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-orange-500 overflow-hidden">
              <div className="w-96 left-[25px] top-[15px] absolute justify-start text-amber-950 text-sm font-medium font-['Euclid_Circular_B']">
                1 2 3 4 _ _ _ _ _ _ _ _ _ _ _ _
              </div>
            </div>
          </div>
          <div className="inline-flex justify-start items-start gap-10">
            <div className="inline-flex flex-col justify-start items-start gap-4">
              <div className="inline-flex justify-start items-center gap-2">
                <div className="justify-start text-blue-950 text-base font-medium font-['Euclid_Circular_B']">
                  CCV
                </div>
                <div className="w-4 h-4 rounded-full outline outline-1 outline-offset-[-0.50px] outline-slate-400" />
                <div className="w-px h-2 bg-slate-400" />
              </div>
              <div className="w-36 h-12 relative bg-gray-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden">
                <div className="left-[52px] top-[15px] absolute justify-start text-slate-400 text-sm font-normal font-['Euclid_Circular_B']">
                  _ _ _{" "}
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col justify-start items-start gap-4">
              <div className="inline-flex justify-start items-center gap-2.5">
                <div className="justify-start text-blue-950 text-base font-medium font-['Euclid_Circular_B']">
                  Son Kullanım Tarihi
                </div>
                <div className="w-4 h-4 rounded-full outline outline-1 outline-offset-[-0.50px] outline-slate-400" />
                <div className="w-px h-2 bg-slate-400" />
              </div>
              <div className="w-60 h-12 relative bg-gray-50 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-200 overflow-hidden">
                <div className="left-[55px] top-[15px] absolute justify-start text-slate-400 text-sm font-normal font-['Euclid_Circular_B']">
                  A A / Y Y
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 h-12 p-2 bg-orange-500 rounded-lg inline-flex justify-center items-center gap-2">
          <div className="justify-start text-white text-base font-semibold font-['Euclid_Circular_B']">
            Ödemeyi Tamamla
          </div>
        </div>
      </div>
      <div className="left-[140px] top-[98px] absolute inline-flex justify-start items-center gap-4">
        <div className="w-10 h-10 relative bg-orange-500 rounded-2xl overflow-hidden">
          <div className="w-5 h-3.5 left-[10px] top-[13px] absolute outline outline-2 outline-offset-[-1px] outline-white" />
          <div className="w-5 h-0 left-[10px] top-[18px] absolute outline outline-2 outline-offset-[-1px] outline-white" />
        </div>
        <div className="justify-start text-blue-950 text-xl font-semibold font-['Euclid_Circular_B']">
          Ödeme
        </div>
      </div>
      <div className="w-52 h-14 left-[282px] top-[303px] absolute bg-zinc-100/25 rounded-lg shadow-[0px_4px_16px_0px_rgba(232,235,241,1.00)] outline outline-1 outline-offset-[-1px] outline-gray-200 backdrop-blur-[2px] overflow-hidden">
        <div className="left-[16px] top-[8px] absolute justify-start text-slate-400 text-sm font-normal font-['Euclid_Circular_B'] leading-tight">
          Kartın ön yüzünde yer alan <br />
          16 haneyi giriniz.
        </div>
      </div>
      <div className="left-[140px] top-[162px] absolute justify-start text-slate-400 text-base font-normal font-['Euclid_Circular_B'] leading-tight">
        Ödemenin gerçekleşmesi için lütfen bilgileri eksiksiz giriniz.
      </div>
      <div className="w-96 h-[584px] left-[734px] top-[98px] absolute overflow-hidden">
        <div className="w-20 h-6 left-[157px] top-[9px] absolute bg-orange-500 rounded" />
        <div className="w-96 h-96 left-[13px] top-[16px] absolute bg-slate-200/70 rounded-2xl backdrop-blur-lg" />
        <div className="w-96 h-36 left-[13px] top-[408px] absolute bg-slate-200/70 rounded-2xl" />
        <div className="w-10 h-10 left-[-7px] top-[388px] absolute bg-white rounded-full" />
        <div className="w-10 h-10 left-[364px] top-[388px] absolute bg-white rounded-full" />
        <div className="w-80 h-0 left-[33px] top-[408px] absolute outline outline-1 outline-offset-[-0.50px] outline-slate-400" />
        <div className="left-[37px] top-[40px] absolute justify-start text-blue-950 text-xl font-semibold font-['Euclid_Circular_B']">
          Ödeme Özeti
        </div>
        <div className="w-80 p-4 left-[37px] top-[89px] absolute bg-slate-200 rounded-2xl inline-flex flex-col justify-start items-start">
          <div className="inline-flex justify-start items-start">
            <div className="w-32 h-8 p-2 flex justify-start items-center gap-2">
              <div className="justify-start text-slate-400 text-sm font-normal font-['Euclid_Circular_B']">
                Sipariş Numarası
              </div>
            </div>
            <div className="w-20 h-8 p-2 flex justify-start items-center gap-2">
              <div className="justify-start text-blue-950 text-sm font-medium font-['Euclid_Circular_B']">
                11458523
              </div>
            </div>
          </div>
          <div className="inline-flex justify-start items-start">
            <div className="w-32 h-8 p-2 flex justify-start items-center gap-2">
              <div className="justify-start text-slate-400 text-sm font-normal font-['Euclid_Circular_B']">
                KDV
              </div>
            </div>
            <div className="w-20 h-8 p-2 flex justify-start items-center gap-2">
              <div className="justify-start text-blue-950 text-sm font-medium font-['Euclid_Circular_B']">
                %20
              </div>
            </div>
          </div>
          <div className="inline-flex justify-start items-start">
            <div className="w-32 h-8 p-2 flex justify-start items-center gap-2">
              <div className="justify-start text-slate-400 text-sm font-normal font-['Euclid_Circular_B']">
                KDV Tutarı
              </div>
            </div>
            <div className="w-20 h-8 p-2 flex justify-start items-center gap-2">
              <div className="justify-start">
                <span class="text-blue-950 text-sm font-medium font-['Euclid_Circular_B']">
                  $ 123,
                </span>
                <span class="text-blue-950 text-sm font-normal font-['Euclid_Circular_B']">
                  28
                </span>
              </div>
            </div>
          </div>
          <div className="inline-flex justify-start items-start">
            <div className="w-32 h-8 p-2 flex justify-start items-center gap-2">
              <div className="justify-start text-slate-400 text-sm font-normal font-['Euclid_Circular_B']">
                Sipariş Tutarı
              </div>
            </div>
            <div className="w-20 h-8 p-2 flex justify-start items-center gap-2">
              <div className="justify-start">
                <span class="text-blue-950 text-sm font-medium font-['Euclid_Circular_B']">
                  $ 123,
                </span>
                <span class="text-blue-950 text-sm font-normal font-['Euclid_Circular_B']">
                  28
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80 left-[37px] top-[452px] absolute inline-flex justify-between items-center">
          <div className="inline-flex flex-col justify-start items-start gap-2">
            <div className="justify-start text-slate-400 text-sm font-normal font-['Euclid_Circular_B']">
              Ödenecek Tutar
            </div>
            <div className="justify-start">
              <span class="text-blue-950 text-2xl font-semibold font-['Euclid_Circular_B']">
                $ 576
              </span>
              <span class="text-blue-950 text-xl font-semibold font-['Euclid_Circular_B']">
                ,
              </span>
              <span class="text-blue-950 text-sm font-normal font-['Euclid_Circular_B']">
                32
              </span>
            </div>
          </div>
          <div className="w-9 h-12 relative overflow-hidden">
            <div className="w-9 h-12 left-0 top-0 absolute bg-slate-400" />
          </div>
        </div>
      </div>
      <div className="left-[140px] top-[24px] absolute justify-start">
        <span class="text-orange-500 text-4xl font-bold font-['Euclid_Circular_B'] leading-10">
          Micro
        </span>
        <span class="text-neutral-700 text-4xl font-normal font-['Euclid_Circular_B'] leading-10">
          SEL
        </span>
      </div>
    </div>
  );
}

export default App;
