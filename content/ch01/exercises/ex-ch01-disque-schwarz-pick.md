---
id: ex-ch01-disque-schwarz-pick
type: exercise
chapters: [1]
title: Lemme de Schwarz–Pick — le lemme de Schwarz sans hypothèse f(0)=0
source: "Classique (lemme de Schwarz–Pick, cf. Stein–Shakarchi, ch. 8 et Rudin, Real and Complex Analysis, ch. 12 ; q. 4–5 inventées)"
difficulty: 3
time: 40
tools: [ch01-lemme-schwarz, ch01-automorphismes-disque, ch01-groupe-automorphismes, ch01-formules-derivation, ch01-stabilite-operations]
---
## Énoncé

On note $D=D(0,1)$ le disque unité ouvert et, pour $a\in D$,
$$
f_a(z)=\frac{z-a}{1-\bar a z}\qquad(z\in D).
$$
On admet que $f_a$ est une bijection holomorphe de $D$ sur $D$.

1. Calculer $f_a'(z)$, puis $f_a'(0)$ et $f_a'(a)$. Vérifier que $f_a\circ f_{-a}=\id_D$.
2. Soit $f$ holomorphe sur $D$ telle que $f(D)\subset D$. Soient $a\in D$ et $b=f(a)$. Montrer que $g=f_b\circ f\circ f_{-a}$ est holomorphe sur $D$, à valeurs dans $D$, et que $g(0)=0$. En déduire que pour tout $z\in D$,
$$
\left|\frac{f(z)-f(a)}{1-\overline{f(a)}\,f(z)}\right|\le\left|\frac{z-a}{1-\bar az}\right| .
$$
3. Montrer que, pour tout $a\in D$,
$$
|f'(a)|\le\frac{1-|f(a)|^2}{1-|a|^2},
$$
et que si l'égalité a lieu pour un $a\in D$, alors $f$ est un automorphisme de $D$.
4. Déterminer la plus grande valeur possible de $|f'(0)|$ lorsque $f$ parcourt l'ensemble des fonctions holomorphes de $D$ dans $D$ telles que $f(0)=\frac12$, ainsi que toutes les fonctions qui la réalisent.
5. (a) Déterminer toutes les fonctions $f$ holomorphes de $D$ dans $D$ telles que $f(0)=\frac12$ et $f(\frac12)=0$.
   (b) Existe-t-il $f$ holomorphe de $D$ dans $D$ telle que $f(0)=\frac12$ et $f(\frac12)=-\frac14$ ?

## Indices

### Indice 1
Le seul outil du cours qui transforme « $f(D)\subset D$ » en inégalité est un lemme qui demande $f(0)=0$. Il faut donc **se ramener** à ce cas en composant $f$, à la source et au but, par des automorphismes de $D$ qui déplacent les points voulus en $0$.

### Indice 2
Lemme de Schwarz (Lemme I.13.1) pour $g$ : $g\in\Hol(D)$, $g(D)\subset\bar D(0,1)$, $g(0)=0$ $\Rightarrow$ $|g(w)|\le|w|$ et $|g'(0)|\le1$, avec égalité (pour un $w\neq0$, ou pour $g'(0)$) seulement si $g$ est une rotation. Pour 2, évaluer en $w=f_a(z)$ ; pour 3, calculer $g'(0)$ par la règle de dérivation d'une composée.

### Indice 3
$g'(0)=f_b'(b)\,f'(a)\,f_{-a}'(0)=\dfrac{(1-|a|^2)\,f'(a)}{1-|b|^2}$. Pour 4, la borne vaut $\frac{1-1/4}{1}=\frac34$ ; pour 5, appliquer l'inégalité de 2 avec $a=0$, $z=\frac12$.

## Corrigé

**1.** $f_a$ est une fraction rationnelle sans pôle dans $D$ (son pôle $1/\bar a$, si $a\neq0$, est de module $>1$). Par la formule de dérivation d'un quotient ([[ch01-formules-derivation]]) :
$$
f_a'(z)=\frac{(1-\bar az)-(z-a)(-\bar a)}{(1-\bar az)^2}=\frac{1-|a|^2}{(1-\bar az)^2}.
$$
D'où $f_a'(0)=1-|a|^2$ et $f_a'(a)=\dfrac{1-|a|^2}{(1-|a|^2)^2}=\dfrac{1}{1-|a|^2}$.

Pour $w\in D$, $f_{-a}(w)=\frac{w+a}{1+\bar aw}$ et
$$
f_a(f_{-a}(w))=\frac{\frac{w+a}{1+\bar aw}-a}{1-\bar a\frac{w+a}{1+\bar aw}}=\frac{w+a-a-|a|^2w}{1+\bar aw-\bar aw-|a|^2}=\frac{w(1-|a|^2)}{1-|a|^2}=w .
$$
Donc $f_a\circ f_{-a}=\id_D$ (et, en changeant $a$ en $-a$, $f_{-a}\circ f_a=\id_D$) : $f_a^{-1}=f_{-a}$.

**2.** *Holomorphie et valeurs.* $f_{-a}$ envoie $D$ dans $D$ (proposition I.13.3, [[ch01-automorphismes-disque]], avec $-a\in D$), $f$ envoie $D$ dans $D$, et $f_b$ ($b=f(a)\in D$) envoie $D$ dans $D$. Ces trois fonctions sont holomorphes, donc la composée $g$ est holomorphe sur $D$ ([[ch01-stabilite-operations]]) et $g(D)\subset D\subset\bar D(0,1)$.

*Valeur en $0$.* $f_{-a}(0)=a$, puis $f(a)=b$, puis $f_b(b)=0$ : $g(0)=0$.

*Application du lemme de Schwarz.* Les hypothèses du lemme de Schwarz (poly, Lemme I.13.1, p. 32, [[ch01-lemme-schwarz]]) sont satisfaites : $g\in\Hol(D)$, $g(D)\subset\bar D(0,1)$, $g(0)=0$. Donc $|g(w)|\le|w|$ pour tout $w\in D$. Soit $z\in D$ ; posons $w=f_a(z)\in D$. Par 1, $f_{-a}(w)=z$, donc $g(w)=f_b(f(z))$ et
$$
|f_b(f(z))|\le|f_a(z)|,\qquad\text{c'est-à-dire}\qquad \left|\frac{f(z)-f(a)}{1-\overline{f(a)}f(z)}\right|\le\left|\frac{z-a}{1-\bar az}\right| .
$$

**3.** Le lemme de Schwarz donne aussi $|g'(0)|\le1$. Par la règle de dérivation des composées ([[ch01-formules-derivation]]) et 1 :
$$
g'(0)=f_b'\big(f(f_{-a}(0))\big)\cdot f'\big(f_{-a}(0)\big)\cdot f_{-a}'(0)=f_b'(b)\,f'(a)\,(1-|a|^2)=\frac{(1-|a|^2)\,f'(a)}{1-|b|^2}.
$$
Donc $|f'(a)|\le\dfrac{1-|b|^2}{1-|a|^2}=\dfrac{1-|f(a)|^2}{1-|a|^2}$.

*Cas d'égalité.* Si l'égalité a lieu en $a$, alors $|g'(0)|=1$ et le point 2 du lemme de Schwarz dit que $g$ est une rotation : $g(w)=\lambda w$ avec $|\lambda|=1$. Alors $f=f_b^{-1}\circ g\circ f_{-a}^{-1}=f_{-b}\circ g\circ f_a$ est une composée de trois automorphismes de $D$, donc un automorphisme de $D$ ($\mathrm{Aut}_{hol}(D)$ est un groupe, [[ch01-groupe-automorphismes]]). Explicitement, $f(z)=f_{-b}\big(\lambda f_a(z)\big)$.

**4.** Avec $a=0$ et $f(0)=b=\frac12$, la question 3 donne $|f'(0)|\le 1-\frac14=\frac34$. Cette borne est atteinte : d'après le cas d'égalité, les fonctions qui la réalisent sont exactement les $f=f_{-1/2}\circ(\lambda\,\cdot)$, $|\lambda|=1$, soit
$$
f(z)=\frac{\lambda z+\frac12}{1+\frac12\lambda z}=\frac{2\lambda z+1}{2+\lambda z}\qquad(|\lambda|=1).
$$
Réciproquement, une telle $f$ est un automorphisme de $D$ (composée de la rotation $z\mapsto\lambda z$ et de $f_{-1/2}$), $f(0)=\frac12$, et $f'(z)=\frac{2\lambda(2+\lambda z)-\lambda(2\lambda z+1)}{(2+\lambda z)^2}=\frac{3\lambda}{(2+\lambda z)^2}$, donc $f'(0)=\frac{3\lambda}{4}$ et $|f'(0)|=\frac34$. **Le maximum vaut $\frac34$, atteint exactement pour les $f(z)=\frac{2\lambda z+1}{2+\lambda z}$, $|\lambda|=1$.**

**5. (a)** Soit $f$ une telle fonction. On applique 2 avec $a=0$, $b=f(0)=\frac12$, de sorte que $g=f_{1/2}\circ f$ (car $f_{-0}=\id$), et on évalue en $w=\frac12\in D\setminus\{0\}$ :
$$
|g(\tfrac12)|=|f_{1/2}(f(\tfrac12))|=|f_{1/2}(0)|=\left|-\tfrac12\right|=\tfrac12=|w| .
$$
Il y a égalité dans le lemme de Schwarz en un point $w\neq0$ : $g$ est une rotation, $g(w)=\lambda w$, et $f=f_{-1/2}\circ g$, c'est-à-dire $f(z)=\frac{2\lambda z+1}{2+\lambda z}$ comme en 4. La condition $f(\frac12)=0$ impose $\lambda+1=0$, soit $\lambda=-1$ :
$$
f(z)=\frac{1-2z}{2-z}=-f_{1/2}(z).
$$
Réciproquement, cette fonction est un automorphisme de $D$ ([[ch01-automorphismes-disque]], avec $\lambda=-1$, $a=\frac12$), et $f(0)=\frac12$, $f(\frac12)=0$. **Il y a exactement une solution, $f(z)=\dfrac{1-2z}{2-z}$.**

**(b)** Si une telle $f$ existait, l'inégalité de 2 avec $a=0$, $z=\frac12$ donnerait $|f_{1/2}(-\frac14)|\le\frac12$. Or
$$
f_{1/2}\!\left(-\tfrac14\right)=\frac{-\frac14-\frac12}{1+\frac18}=\frac{-\frac34}{\frac98}=-\frac23,
$$
et $\frac23>\frac12$. **Aucune telle fonction n'existe**, bien que $\frac12$ et $-\frac14$ soient dans $D$ (on ne peut pas faire varier $f$ « trop vite » au sens de la quantité $\left|\frac{u-v}{1-\bar vu}\right|$).

## Pièges et variantes

* Le lemme de Schwarz exige $g(0)=0$ : l'appliquer directement à $f$ quand $f(0)\neq0$ est la faute la plus fréquente. En 5 (b), « $|f(\frac12)|\le\frac12$ » n'est **pas** une conséquence de Schwarz, puisque $f(0)\neq0$.
* Bien composer **des deux côtés** : $f_{-a}$ à droite (envoie $0$ sur $a$), $f_b$ à gauche (envoie $b$ sur $0$). Inverser l'ordre donne une fonction qui n'envoie pas $0$ sur $0$.
* Cas d'égalité : il faut une égalité en un point $w\neq0$ (pour $|g(w)|=|w|$) ou $|g'(0)|=1$ ; en $w=0$, l'égalité $|g(0)|=0$ ne dit rien.
* Variante : si $f:D\to D$ holomorphe a deux points fixes distincts, alors $f=\id_D$ (se ramener à un point fixe en $0$ par conjugaison par $f_a$, puis Schwarz avec égalité).
* Variante : pour $f:D\to D$ holomorphe, $|f'(0)|\le1-|f(0)|^2$ ; en particulier $|f'(0)|+|f(0)|^2\le1$.
