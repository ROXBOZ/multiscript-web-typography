import React, { useContext } from "react";
import { LanguagesContext } from "../../contexts/langContext";

const Paragraphs = () => {
  const { selectedScript } = useContext(LanguagesContext);
  return (
    <div className="main-text">
      {selectedScript && selectedScript === "latin" && (
        <>
          <p>
            Web accessibility (or A11Y) allows people with disabilities -
            visual, auditory or cognitive - permanent or temporary - to navigate
            the web easily. The WCAG 2.1 AA standards define a whole series of
            principles to be applied in order to ensure a perceptible, usable
            and understandable web for everyone. Web accessibility is web
            inclusion. Code, design and content have to meets some standards for
            a website to be accessible. Web Accessibility increases the user
            experience – everyone should benefit from it.
          </p>
          <p>
            Good practice in web typography and web accessibility means well
            adjusted CSS settings. But, different writing systems mean different
            CSS adjustments.
          </p>
          <p>
            To mention just a few examples, paragraphs are commonly set at 16px
            in Latin, but the Arabic writing system needs 18px to reach
            satisfying readibility. Turkish is based on the latin writing
            system, but its accented glyphs can be much taller than those found
            in Western European languages; for this reason, it needs extra
            line-height to maintain readability. Cyrillic on the other hand
            adapts well to latin CSS settings. Most websites hosted in Europe
            translated in writing systems other than Latin are not set
            correctly. As a result, the user experience drops.
          </p>
        </>
      )}

      {selectedScript && selectedScript === "arabic" && (
        <>
          {" "}
          <p>
            الوصولية إلى الويب (أو{" "}
            <span className="en" lang="en">
              A11Y
            </span>
            ) تسمح للأشخاص ذوي الإعاقة - بصرية أو سمعية أو إدراكية - سواء كانت
            دائمة أو مؤقتة - بالتنقل في الويب بسهولة. تحدد معايير{" "}
            <span className="en" lang="en">
              WCAG 2.1 AA
            </span>{" "}
            مجموعة كاملة من المبادئ التي يجب تطبيقها من أجل ضمان وجود ويب ملموس
            وقابل للاستخدام والفهم للجميع. إن الوصول إلى الويب هو شمل الويب. يجب
            على الرمز والتصميم والمحتوى تلبية بعض المعايير لكي يكون الموقع
            قابلًا للوصول. إن الوصولية إلى الويب تزيد من تجربة المستخدم - ينبغي
            أن يستفيد الجميع منها.
          </p>
          <p>
            الممارسة الجيدة في الخط الإلكتروني وإمكانية الوصول عبر الويب تتطلب
            إعدادات{" "}
            <span className="en" lang="en">
              CSS
            </span>{" "}
            متناسقة. ومع ذلك، تختلف الأنظمة الكتابية المختلفة في المتطلبات
            اللازمة لإجراء تعديلات على{" "}
            <span className="en" lang="en">
              CSS
            </span>
            .
          </p>
          <p>
            لذكر بعض الأمثلة، تم تعيين الفقرات عادة عند 16 بكسل في النص
            اللاتيني، ولكن نظام الكتابة العربي يحتاج إلى 18 بكسل للوصول إلى
            قراءة مرضية. اللغة التركية مبنية على النظام اللاتيني للكتابة، ولكن
            رموزها الملونة يمكن أن تكون أطول بكثير من تلك الموجودة في اللغات
            الغربية الأوروبية؛ لهذا السبب، فإنه يحتاج إلى ارتفاع سطر إضافي
            للحفاظ على القراءة السهلة. بالنسبة للحرف السيريلي، فإنه يتكيف بشكل
            جيد مع إعدادات الـ{" "}
            <span className="en" lang="en">
              CSS
            </span>{" "}
            اللاتينية. معظم مواقع الويب التي تستضيف في أوروبا وتترجم في أنظمة
            كتابة غير اللاتينية لا تتم تهيئتها بشكل صحيح. ونتيجة لذلك، ينخفض
            تجربة المستخدم.
          </p>
        </>
      )}
    </div>
  );
};

export default Paragraphs;
