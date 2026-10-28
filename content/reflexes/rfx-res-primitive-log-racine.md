---
id: rfx-res-primitive-log-racine
type: reflexe
situation: Montrer qu'une fonction holomorphe admet (ou n'admet pas) une primitive, un logarithme ou une racine n-ième holomorphe sur un ouvert donné
chapters: [1, 2]
---
## Situation

On a un ouvert $\Omega$ (plan fendu, couronne, plan privé d'un segment ou de quelques points, demi-plan, disque) et une fonction $f\in\Hol(\Omega)$, ou une fonction $h\in\Hol(\Omega)$ qui ne s'annule pas. On veut montrer qu'il existe $F\in\Hol(\Omega)$ avec $F'=f$, ou $L\in\Hol(\Omega)$ avec $e^{L}=h$, ou $g\in\Hol(\Omega)$ avec $g^n=h$ ; ou au contraire qu'**aucune** n'existe. Ces questions servent souvent d'amorce (pour définir $z^{\alpha}$, $\sqrt{h}$, un argument continu, ou pour justifier qu'une intégrale de lacet est nulle).

Mots-clés : *admet une primitive holomorphe*, *détermination holomorphe du logarithme / de la racine carrée*, *ouvert étoilé*, *simplement connexe*, *ne s'annule pas*, *$\mathrm{Log}(h)$*.

## Options

### [x] Primitive sur un ouvert simplement connexe — [[ch02-primitive-simplement-connexe]]
**Quand.** $\Omega$ est simplement connexe : en pratique **étoilé** (convexe, disque, demi-plan, plan fendu $\C\setminus\R_-$, $\C$ privé d'une demi-droite), ce qui suffit par [[ch02-etoile-simplement-connexe]].
**Justification.** Sur un simplement connexe, l'intégrale de $f$ sur tout lacet est nulle ([[ch02-cauchy-simplement-connexe]]), donc $F(z)=\int_{z_0}^{z}f$ (le long de n'importe quel chemin) est bien définie et $F'=f$ (poly, Théorème II.9.1, p. 55). Sur un étoilé de centre $a$, on peut prendre explicitement $F(z)=\int_{[a,z]}f$.
**Pièges.** **Donner le centre** d'étoilement et dire pourquoi $[a,z]\subset\Omega$ pour tout $z\in\Omega$ ; « simplement connexe car on le voit sur le dessin » n'est pas une preuve. $\C^\times$, une couronne, $\C\setminus[-1,1]$ ne sont pas simplement connexes.

### [x] Logarithme et racines d'une fonction qui ne s'annule pas — [[ch02-logarithme-existence]]
**Quand.** $h\in\Hol(\Omega)$ sans zéro, $\Omega$ simplement connexe ; pour une racine $n$-ième, on pose $g=e^{L/n}$, qui vérifie $g^n=e^{L}=h$ ([[ch02-puissance-complexe-def]]).
**Justification.** $h'/h$ est holomorphe, donc a une primitive $F$ ; avec $c$ tel que $e^{c}=h(z_0)e^{-F(z_0)}$, la fonction $L=F+c$ vérifie $(he^{-L})'=0$, donc $e^{L}=h$ sur $\Omega$ connexe (poly, Proposition II.9.3, p. 56).
**Pièges.** La connexité sert à passer de « dérivée nulle » à « constante ». Le logarithme est unique **à $2i\pi k$ près** : pour une détermination précise, fixer la valeur en un point. $\mathrm{Log}\,h$ ainsi construit n'est pas $\mathrm{Log}\circ h$ (détermination principale composée) en général.

### [x] Composer avec la détermination principale (sans topologie) — [[ch02-logarithme-determination-principale-def]]
**Quand.** $h(\Omega)\subset\C\setminus\R_-$, par exemple $\Re h>0$, ou $h(\Omega)\subset D(1,1)$ ; plus généralement, $h$ se **factorise** en $h=c\,h_1\cdots h_k$ avec chaque $h_j(\Omega)$ contenu dans un plan fendu (éventuellement après rotation $e^{i\theta}h_j$). Cela marche même si $\Omega$ n'est **pas** simplement connexe.
**Justification.** $\mathrm{Log}$ est holomorphe sur $\C\setminus\R_-$ et $e^{\mathrm{Log}\,w}=w$, donc $\mathrm{Log}\circ h$ est un logarithme de $h$ ; $\log c+\sum_j\mathrm{Log}\circ h_j$ est un logarithme du produit.
**Pièges.** $\mathrm{Log}(h_1h_2)\ne\mathrm{Log}\,h_1+\mathrm{Log}\,h_2$ en général, mais la somme **est** un logarithme du produit, et c'est tout ce qu'on demande. Vérifier soigneusement l'inclusion de l'image (une estimation $|h_j-1|<1$ ou $\Re h_j>0$ explicite).

### [x] Obstruction par une intégrale de lacet non nulle — [[ch01-integrale-primitive]]
**Quand.** On veut prouver la **non-existence**, ou décider sur un ouvert non simplement connexe. Si $f=F'$ sur $\Omega$, alors $\int_\gamma f=0$ pour **tout** lacet $\gamma$ de $\Omega$ (poly, Théorème I.5.9, p. 17). Pour un logarithme : si $e^{L}=h$, alors $L'=h'/h$, donc $\int_\gamma\frac{h'}{h}=0$. Pour une racine : si $g^n=h$, alors $n\frac{g'}{g}=\frac{h'}{h}$, donc $\frac1{2i\pi}\int_\gamma\frac{h'}{h}\in n\Z$.
**Justification.** On calcule $\frac1{2i\pi}\int_\gamma\frac{h'}{h}$ par le principe de l'argument ([[ch02-principe-argument]]) ou par résidus : c'est $\sum_{\text{zéros}}m(s)\Ind_s(\gamma)-\sum_{\text{pôles}}m(s)\Ind_s(\gamma)$ si $h$ est méromorphe sur $\C$.
**Pièges.** Pour l'**existence** sur un ouvert non simplement connexe, la réciproque (« toutes les intégrales de lacets sont nulles $\Rightarrow$ primitive ») est vraie sur un ouvert connexe mais doit être **redémontrée** (construction $F(z)=\int_{z_0}^zf$ le long d'un chemin, indépendance par rapport au chemin) ; souvent plus simple : l'option précédente.

### [ ] Primitive locale — [[ch01-primitive-locale]]
**Pourquoi ce n'est pas l'outil ici.** Elle donne une primitive sur **chaque disque** contenu dans $\Omega$, mais ces primitives locales ne se recollent pas forcément : $1/z$ a une primitive sur tout disque de $\C^\times$ et aucune sur $\C^\times$ ($\int_{C(0,1)}dz/z=2i\pi\ne0$). De même $\exp$ admet des logarithmes locaux partout sur $\C^\times$ ([[ch01-exp-image-c-etoile-log-local]]) sans logarithme global.
**Quand il le serait.** Pour une question locale (« au voisinage de $z_0$ »), ou comme étape de Morera / Goursat.

## Démarche

1. **$\Omega$ étoilé ?** Chercher un centre $a$ (pour un plan fendu le long d'une demi-droite issue de $b$, tout point de la demi-droite opposée convient ; pour un demi-plan, n'importe quel point). Si oui → primitive / logarithme (si $h$ ne s'annule pas) / racine $n$-ième existent.
2. **Sinon, factoriser $h$** en facteurs dont l'image évite une demi-droite issue de $0$ → logarithme explicite par $\mathrm{Log}\circ h_j$.
3. **Pour la non-existence**, trouver **un** lacet $\gamma\subset\Omega$ (souvent un cercle entourant un « trou » de $\Omega$) avec $\int_\gamma f\ne0$, ou $\frac1{2i\pi}\int_\gamma\frac{h'}{h}\ne0$ (pas de logarithme), ou $\notin n\Z$ (pas de racine $n$-ième).
4. **Critère pratique d'existence** quand $h$ est méromorphe sur $\C$ et que ses zéros et pôles sont contenus dans un **compact connexe** $K\subset\C\setminus\Omega$ (segment, disque fermé) : pour tout lacet $\gamma\subset\Omega$, l'indice $\Ind_s(\gamma)$ est le même pour tous les $s\in K$ ([[ch02-indice-entier-localement-constant]]), donc $\frac1{2i\pi}\int_\gamma\frac{h'}{h}=\Ind_K(\gamma)\,(Z-P)$, nul si $Z=P$ (comptés avec multiplicité). On construit alors $L$ en intégrant $h'/h$ le long des chemins (réciproque à rédiger).
5. **Fixer la détermination** par la valeur en un point et vérifier l'unicité (deux logarithmes diffèrent d'une constante $2i\pi k$ sur un connexe).

## Pièges

* Affirmer qu'un ouvert est simplement connexe sans donner de centre d'étoilement ni d'homotopie explicite.
* Oublier l'hypothèse « $h$ ne s'annule pas » (ou prendre $\Omega$ contenant un zéro de $h$).
* Croire que $\mathrm{Log}\circ h$ est holomorphe sans vérifier $h(\Omega)\cap\R_-=\emptyset$.
* Confondre « pas de logarithme » et « pas de racine carrée » : $z^2$ n'a pas de logarithme sur $\C^\times$ mais a la racine carrée $z$ ; le critère pour une racine $n$-ième porte sur la divisibilité par $n$.
* Pour la non-existence, utiliser un lacet qui sort de $\Omega$.

## Mini-exemple

*Énoncé.* Sur la couronne $\Omega=\{1<|z|<2\}$, les fonctions $h_1(z)=\dfrac{(2z-1)(z-3)}{z}$ et $h_2(z)=z(z-3)$ (qui ne s'annulent pas sur $\Omega$) admettent-elles un logarithme holomorphe ?

*Solution.* **$h_1$ : oui.** On factorise $h_1(z)=-2\big(1-\tfrac1{2z}\big)(3-z)$. Pour $|z|>1$, $\big|\tfrac1{2z}\big|<\tfrac12$, donc $1-\tfrac1{2z}\in D(1,\tfrac12)\subset\{\Re w>0\}$ ; pour $|z|<2$, $3-z\in D(3,2)\subset\{\Re w>0\}$. Ainsi $L(z)=\ln2+i\pi+\mathrm{Log}\big(1-\tfrac1{2z}\big)+\mathrm{Log}(3-z)$ est holomorphe sur $\Omega$ et $e^{L}=-2\big(1-\tfrac1{2z}\big)(3-z)=h_1$. (Cohérent avec l'étape 4 : à l'intérieur de $C(0,\frac32)$, un zéro $\frac12$ et un pôle $0$, donc $Z-P=0$.)
**$h_2$ : non.** Si $e^{L}=h_2$ sur $\Omega$, alors $\int_{C(0,3/2)}\frac{h_2'}{h_2}=\int_{C(0,3/2)}L'=0$. Or $\frac{h_2'}{h_2}=\frac1z+\frac1{z-3}$ et $\int_{C(0,3/2)}\big(\frac1z+\frac1{z-3}\big)dz=2i\pi\Ind_0+2i\pi\Ind_3=2i\pi(1+0)\ne0$. Contradiction. Même argument : $h_2$ n'a pas non plus de racine carrée holomorphe sur $\Omega$, car $1\notin2\Z$.
