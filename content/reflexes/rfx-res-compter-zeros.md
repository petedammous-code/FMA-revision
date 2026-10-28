---
id: rfx-res-compter-zeros
type: reflexe
situation: Compter ou localiser les zéros d'une fonction holomorphe dans un disque, une couronne ou un demi-plan
chapters: [1, 2, 3]
---
## Situation

On a une fonction $f$ holomorphe (souvent un polynôme, ou un polynôme perturbé par une exponentielle, ou une fonction dépendant d'un paramètre $\lambda$, ou une limite $f=\lim f_n$) et un domaine $U$ : disque $D(0,r)$, couronne $\{r_1<|z|<r_2\}$, demi-plan $\{\Re z>0\}$, carré. On veut le **nombre** de zéros de $f$ dans $U$ comptés avec multiplicité, ou montrer qu'il y en a **exactement un** (unicité d'un point fixe, injectivité, solution d'une équation $f(z)=w$), ou que tous les zéros sont réels, simples, ou dans une région donnée.

Mots-clés : *combien de solutions*, *comptées avec multiplicité*, *dans le disque unité*, *exactement une solution*, *pour $|\lambda|$ petit*, *considérer $f'/f$*, *nombre de zéros de $f_n$*.

## Options

### [x] Théorème de Rouché — [[ch02-rouche]]
**Quand.** Sur le bord $\Gamma$ de $U$, $f$ s'écrit « terme dominant + perturbation » : $f=g+(f-g)$ avec $|f(z)-g(z)|<|g(z)|$ **pour tout** $z\in\Gamma$, et le nombre de zéros de $g$ dans $U$ est évident ($g=az^k$, $g$ linéaire, $g=e^z-c$...). Polynôme sur $|z|=r$ : prendre le monôme qui domine la somme des modules des autres.
**Justification.** $f$ et $g$ holomorphes n'ont pas de pôle, donc $Z(f,U)=Z(g,U)$ (poly, Théorème II.8.4, p. 54). L'inégalité stricte garantit au passage que ni $f$ ni $g$ ne s'annule sur $\Gamma$.
**Pièges.** L'inégalité doit être **stricte en tout point** de $\Gamma$ (vérifier les points où elle est la plus serrée, par exemple $z=\pm1$, $z=\pm i$). Le poly demande $\bar U\subset\Omega$ et $\Gamma$ lacet orienté positivement : pour un disque ou une couronne, le dire. Couronne : appliquer Rouché sur chacun des deux cercles (avec éventuellement deux termes dominants différents) et soustraire.

### [x] Principe de l'argument — [[ch02-principe-argument-domaine]]
**Quand.** Pas de terme dominant évident, mais on peut suivre l'argument de $f(z)$ le long de $\Gamma$ : demi-plan (bord = segment $[-iR,iR]$ + demi-cercle), $f$ réelle sur une partie du bord, ou nombre de zéros dépendant **continûment** d'un paramètre (donc constant car entier).
**Justification.** $\frac{1}{2i\pi}\int_\Gamma\frac{f'}{f}=Z(f,U)-P(f,U)$ ; c'est aussi l'indice en $0$ du lacet image $f\circ\Gamma$ ([[ch02-principe-argument]]). Une intégrale à valeurs entières qui dépend continûment d'un paramètre sur un connexe est constante.
**Pièges.** Le lacet $\Gamma$ ne doit passer par aucun zéro ; compter les **multiplicités** ; sur un segment, suivre les changements de signe de $\Re f$ et $\Im f$ pour compter les tours, sans « lire » la variation d'argument sur un dessin approximatif.

### [x] Théorème de Hurwitz et sa forme locale — [[ch03-hurwitz-zeros-locaux]]
**Quand.** $f=\lim f_n$ localement uniformément (sommes partielles, produit infini, paramètre $\lambda\to\lambda_0$) et on veut transférer l'information sur les zéros : $f_n$ sans zéro $\Rightarrow$ $f$ sans zéro ou $f\equiv0$ ; $f_n$ injectives $\Rightarrow$ $f$ injective ou constante ([[ch03-hurwitz]]) ; nombre de zéros de $f_n$ près d'un point qui se stabilise.
**Justification.** Principe de l'argument sur un petit cercle sans zéro de $f$, et convergence uniforme de $f_n'/f_n$ vers $f'/f$ sur ce cercle (Weierstraß [[ch03-weierstrass]]).
**Pièges.** Vérifier la **convergence localement uniforme** (pas seulement simple) et la **connexité** de $\Omega$ ; ne pas oublier l'alternative $f\equiv0$ ou $f$ constante ($f_n(z)=z^n$ sur le disque épointé, [[ch03-hurwitz-contre-exemple]]).

### [ ] Théorème de d'Alembert–Gauss — [[ch01-dalembert-gauss]]
**Pourquoi ce n'est pas l'outil ici.** Il donne $n$ racines dans $\C$ pour un polynôme de degré $n$, sans aucune information sur leur position.
**Quand il le serait.** Pour l'existence d'une racine ou la factorisation ; combiné à Rouché sur un grand cercle, il localise toutes les racines dans un disque $D(0,R)$ ([[ch02-dalembert-gauss-rouche]]), et donne le nombre de racines **hors** de $U$ par différence.

### [ ] Principe du maximum appliqué à $1/f$ — [[ch01-principe-maximum]]
**Pourquoi ce n'est pas l'outil ici.** Il montre seulement l'**existence** d'un zéro : si $f\in\Hol(\Omega)$, $\bar U\subset\Omega$, $U$ borné connexe et $|f(a)|<\min_{\partial U}|f|$ pour un $a\in U$, alors $f$ s'annule dans $U$ (sinon $1/f$ violerait le maximum). Il ne compte rien.
**Quand il le serait.** Question « montrer que $f$ s'annule au moins une fois dans $U$ » sans autre information exploitable ; ou pour prouver une majoration utilisée ensuite dans Rouché.

## Démarche

1. **Cadre.** $f$ holomorphe sur un ouvert $\Omega\supset\bar U$ ? Bord $\Gamma$ = lacet orienté positivement ? Si $f$ a des pôles, c'est $Z-P$ qu'on obtient.
2. **Chercher un terme dominant sur $\Gamma$** (inégalité triangulaire, $|e^z|=e^{\Re z}\le e^{r}$ sur $|z|=r$, $|\sin z|\le\cosh(\Im z)$...). S'il existe → Rouché, en écrivant l'inégalité stricte pour tout $z\in\Gamma$.
3. **Couronne** → $Z(f,D(0,r_2))-Z(f,D(0,r_1))$, et vérifier qu'aucun zéro n'est sur $C(0,r_1)$ (c'est automatique si l'inégalité de Rouché y est stricte).
4. **Demi-plan ou domaine non borné** → demi-disque de rayon $R$ (avec $R$ plus grand que le module de tous les zéros, d'après [[ch02-dalembert-gauss-rouche]] pour un polynôme) et principe de l'argument sur son bord : sur le demi-cercle la variation d'argument est celle du terme dominant ($\approx n\pi$ pour $z^n$), sur le segment $[-iR,iR]$ on la lit sur les signes de $\Re f$ et $\Im f$ ; ou transformer le domaine ($z\mapsto1/z$, $z\mapsto e^{z}$).
5. **Zéros réels.** Si $f$ est réelle sur $\R$ (coefficients réels), les zéros non réels vont par paires conjuguées ; compter les zéros réels par le théorème des valeurs intermédiaires et la monotonie ou la convexité, puis en déduire le nombre de zéros non réels.
6. **Simplicité / exactement un.** Rouché dans $n$ disques disjoints donnant chacun $1$ zéro → $n$ zéros simples. « $f(z)=w$ a exactement une solution pour tout $w\in V$ » → Rouché ou argument appliqué à $f-w$, donne bijectivité.
7. **Suites, paramètres, produits** → Hurwitz ; continuité en le paramètre du nombre de zéros (entier) → principe de l'argument.

## Pièges

* Inégalité de Rouché large, ou vérifiée « en gros » mais fausse en un point du bord.
* Choisir comme $g$ une fonction dont on ne connaît pas non plus les zéros.
* Oublier les multiplicités ($z^3$ a **trois** zéros dans $D$, tous en $0$).
* Oublier que Rouché donne $Z-P$ pour des fonctions méromorphes.
* Dans une couronne, appliquer Rouché sur un seul cercle.
* Hurwitz avec une convergence seulement simple, ou en oubliant le cas $f\equiv0$.

## Mini-exemple

*Énoncé.* Combien l'équation $e^z=4z^3$ a-t-elle de solutions dans $D(0,1)$ ? Combien sont réelles ?

*Solution.* Soit $f(z)=4z^3-e^z$ et $g(z)=4z^3$, entières. Sur $C(0,1)$ : $|f(z)-g(z)|=|e^z|=e^{\Re z}\le e<4=|g(z)|$, inégalité stricte en tout point. Par Rouché, $Z(f,D(0,1))=Z(g,D(0,1))=3$ (zéro triple en $0$).
**Réelles.** $h(x)=4x^3-e^x$. Sur $[-1,0]$ : $4x^3\le0<e^x$, donc $h<0$. Sur $[0,\frac14]$ : $h(x)\le\frac4{64}-1<0$. Sur $[\frac14,1]$ : $h''(x)=24x-e^x\ge6-e>0$, $h$ est convexe avec $h(\frac14)<0<4-e=h(1)$ ; après un premier zéro $c$, la convexité et $h(\frac14)<h(c)$ rendent $h$ strictement croissante : un seul zéro réel ($c\approx0{,}83$).
**Conclusion.** Comme $f$ est réelle sur $\R$, ses zéros non réels vont par paires conjuguées : $3=1+2$, soit une solution réelle et deux solutions non réelles conjuguées dans $D(0,1)$ (numériquement $\approx-0{,}35\pm0{,}44\,i$).
