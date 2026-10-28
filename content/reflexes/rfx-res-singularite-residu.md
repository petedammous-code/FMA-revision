---
id: rfx-res-singularite-residu
type: reflexe
situation: Déterminer la nature d'une singularité isolée (effaçable, pôle, essentielle) et calculer le résidu
chapters: [1, 2]
---
## Situation

On a $f$ holomorphe sur un disque épointé $D(z_0,r)\setminus\{z_0\}$, le plus souvent donnée par une formule : quotient $g/h$ de fonctions holomorphes ($\frac{1}{z\sin z}$, $\frac{e^z-1}{z^3}$, $\cot z$), composition avec $1/z$ ($e^{1/z}$, $\sin(1/z)$), produit des deux. On veut : la **nature** de $z_0$, l'**ordre** du pôle, la **partie principale**, le **résidu** $\Res_{z_0}(f)$ ; ou savoir si $f$ est méromorphe sur un ouvert $\Omega$ (pour pouvoir appliquer la formule des résidus).

Mots-clés : *se prolonge holomorphiquement*, *pôle d'ordre*, *partie principale / polaire*, *développement de Laurent*, *singularité essentielle*, *justifier que $f$ est méromorphe et calculer ses résidus*.

## Options

### [x] Ordres des zéros du numérateur et du dénominateur — [[ch01-def-multiplicite-zero]]
**Quand.** $f=g/h$ avec $g,h$ holomorphes près de $z_0$, $g\not\equiv0$, $h(z_0)=0$. On calcule $p=\mathrm{ord}_{z_0}(g)$ et $q=\mathrm{ord}_{z_0}(h)$ (premier coefficient non nul du DSE, ou première dérivée non nulle).
**Justification.** $g=(z-z_0)^pg_1$, $h=(z-z_0)^qh_1$ avec $g_1(z_0)h_1(z_0)\ne0$ (poly, Définition I.11.2, p. 27), donc $f=(z-z_0)^{p-q}\,g_1/h_1$ avec $g_1/h_1$ holomorphe et non nulle en $z_0$ : si $q\le p$, singularité **effaçable** ; si $q>p$, **pôle d'ordre $q-p$** ([[ch02-pole-meromorphe-def]]).
**Pièges.** Ne pas conclure « pôle » parce que le dénominateur s'annule : $\frac{\sin z}{z}$ est effaçable (fausse singularité, [[ch02-fausses-singularites-remarque]]). Un zéro simple de $h$ se voit à $h'(z_0)\ne0$, inutile de développer.

### [x] Critères par le module : Riemann et classification — [[ch02-classification-singularites]]
**Quand.** $f$ n'est pas un quotient de fonctions holomorphes en $z_0$ (composition avec $1/(z-z_0)$, fonction donnée abstraitement par une majoration ou une propriété de son image).
**Justification.** $f$ bornée près de $z_0$ $\Leftrightarrow$ effaçable ([[ch02-singularite-effacable-riemann]]) ; $|f(z)|\to+\infty$ $\Leftrightarrow$ pôle ; sinon singularité **essentielle**, et alors l'image de tout $D(z_0,\eps)\setminus\{z_0\}$ est dense (Casorati–Weierstraß) (poly, Exercice II.7.4, p. 50).
**Pièges.** Pour prouver qu'une singularité est essentielle, exhiber **deux suites** $z_n\to z_0$ le long desquelles $f$ a des comportements incompatibles (une limite finie et une limite infinie, ou deux limites finies distinctes) : cela exclut « $|f|\to\infty$ » (pôle) et « effaçable » (qui donnerait une limite unique en $z_0$), donc aussi « bornée » par Riemann. « $f$ non bornée » ne prouve **pas** que $z_0$ est un pôle.

### [x] Développement de Laurent — [[ch02-laurent-developpement]]
**Quand.** On veut la partie principale, ou le résidu en un pôle **multiple**, ou le résidu en une singularité **essentielle**, et $f$ se construit à partir de DSE connus ($e^u$, $\sin u$, $\frac1{1-u}$) par produits et compositions.
**Justification.** Par définition $\Res_{z_0}(f)=a_{-1}$ ([[ch02-residu-def]]) ; l'unicité du développement autorise à le calculer par n'importe quel procédé (produit de DSE, inverse $\frac1{1-u}=1+u+u^2+\cdots$).
**Pièges.** La Proposition II.4.6 traite le cas méromorphe ; en une singularité essentielle, le développement (avec une infinité de termes négatifs) vient de l'exercice [[ch02-laurent-couronne-cauchy]] : le citer. Pour un pôle d'ordre $m$, développer la partie holomorphe jusqu'à l'ordre $m-1$, pas plus.

### [x] Formules pratiques de résidu — [[ch02-residu-pole-simple]]
**Quand.** Pôle simple : $\Res_{z_0}(f)=\lim_{z\to z_0}(z-z_0)f(z)$, ou $\frac{g(z_0)}{h'(z_0)}$ si $f=g/h$ avec $h(z_0)=0\ne h'(z_0)$. Pôle d'ordre $m$ : $\Res_{z_0}(f)=\frac{1}{(m-1)!}\lim_{z\to z_0}\frac{d^{m-1}}{dz^{m-1}}\big[(z-z_0)^mf(z)\big]$.
**Justification.** Écrire $f=\frac{a_{-m}}{(z-z_0)^m}+\cdots+\frac{a_{-1}}{z-z_0}+\text{(holomorphe)}$, multiplier par $(z-z_0)^m$ et dériver $m-1$ fois : seule la contribution de $a_{-1}$ survit en $z_0$ (une ligne à écrire, la formule d'ordre $m$ étant hors poly).
**Pièges.** Appliquer $\lim(z-z_0)f$ à un pôle double (la limite est infinie, ou on trouve n'importe quoi). Symétrie : si $u\mapsto f(z_0+u)$ est **paire**, le résidu en $z_0$ est nul (le coefficient de $u^{-1}$ est celui d'une puissance impaire).

### [ ] Résidu comme intégrale sur un petit cercle — [[ch02-residu-integrale-cercle]]
**Pourquoi ce n'est pas l'outil ici.** C'est circulaire : calculer $\frac{1}{2i\pi}\int_{C(z_0,r)}f$ est justement ce qu'on ne sait pas faire directement ; en pratique on calcule le résidu **pour** obtenir l'intégrale.
**Quand il le serait.** Pour des propriétés **abstraites** du résidu (par exemple $\Res_{z_0}(f'/f)=$ multiplicité, ou $\Res_{z_0}(F')=0$ pour $F$ méromorphe), ou quand l'intégrale sur le cercle est connue par ailleurs.

## Démarche

1. **La singularité est-elle isolée ?** Vérifier que $f$ est holomorphe sur un disque épointé. Contre-exemple classique : $\frac{1}{\sin(1/z)}$ en $0$, où s'accumulent les pôles $\frac1{k\pi}$ ; ce n'est **pas** une singularité isolée et $f$ n'est méromorphe sur aucun voisinage de $0$.
2. **Si $f=g/h$ avec $g,h$ holomorphes en $z_0$** → comparer les ordres : effaçable (calculer la valeur prolongée par DL) ou pôle d'ordre $q-p$.
3. **Sinon** (composition avec $1/(z-z_0)$, données abstraites) → étudier $|f|$ : bornée, $\to\infty$, ou deux suites contradictoires (essentielle).
4. **Résidu.** Pôle simple : $\lim(z-z_0)f$ ou $g(z_0)/h'(z_0)$. Pôle multiple : Laurent (souvent le plus rapide) ou formule d'ordre $m$. Essentielle : Laurent à partir des DSE connus.
5. **Contrôles.** Parité autour de $z_0$ (résidu nul si paire) ; si $f$ est réelle sur $\R$, les résidus en deux pôles conjugués sont conjugués ; périodicité ($\cot$ : un seul calcul en $0$ suffit).

## Pièges

* Confondre ordre du zéro du dénominateur et ordre du pôle (oublier le zéro du numérateur).
* Calculer $\lim(z-z_0)f$ pour un pôle double.
* Conclure « pôle » pour $e^{1/z}$ parce qu'elle « explose » quand $z\to0^+$ : sur $z\to0^-$ elle tend vers $0$.
* Parler du résidu en un point où $f$ n'est pas méromorphe (singularité non isolée) ; la formule des résidus du poly ne s'applique qu'aux fonctions **méromorphes** sur l'ouvert, donc pas aux singularités essentielles sans précaution.
* Oublier qu'une singularité effaçable a un résidu nul et ne contribue pas à la formule des résidus.

## Mini-exemple

*Énoncé.* Nature des singularités et résidus de $f(z)=\dfrac{1}{z\sin z}$ et de $g(z)=z^2e^{1/z}$.

*Solution.* **$f$.** $h(z)=z\sin z$ s'annule exactement en $k\pi$, $k\in\Z$. En $0$ : $h(z)=z^2\big(1-\frac{z^2}6+O(z^4)\big)$, zéro d'ordre $2$, donc pôle double et $f(z)=\frac1{z^2}\big(1+\frac{z^2}6+O(z^4)\big)=\frac1{z^2}+\frac16+O(z^2)$ : partie principale $\frac1{z^2}$, $\Res_0(f)=0$ (cohérent : $f$ est paire). En $k\pi$, $k\ne0$ : $h'(k\pi)=\sin(k\pi)+k\pi\cos(k\pi)=(-1)^kk\pi\ne0$, pôle simple et $\Res_{k\pi}(f)=\frac{1}{h'(k\pi)}=\frac{(-1)^k}{k\pi}$.
**$g$.** Sur $\C^\times$ : $g(1/n)=e^n/n^2\to+\infty$ mais $g(-1/n)=e^{-n}/n^2\to0$ ; $g$ n'est ni bornée ni de module tendant vers $+\infty$ près de $0$ : singularité **essentielle**. Laurent : $g(z)=\sum_{n\ge0}\frac{z^{2-n}}{n!}$, et le terme en $z^{-1}$ correspond à $n=3$ : $\Res_0(g)=\frac1{3!}=\frac16$.
