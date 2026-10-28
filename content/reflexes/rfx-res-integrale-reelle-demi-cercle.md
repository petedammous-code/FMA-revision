---
id: rfx-res-integrale-reelle-demi-cercle
type: reflexe
situation: Calculer une intégrale sur R d'une fraction rationnelle, seule ou multipliée par cos(kx), sin(kx) ou e^(ikx)
chapters: [1, 2]
---
## Situation

On veut la valeur exacte de $I=\int_{-\infty}^{+\infty}R(x)\,dx$, de $\int_{-\infty}^{+\infty}R(x)\cos(kx)\,dx$ ou de $\int_{-\infty}^{+\infty}R(x)\sin(kx)\,dx$, où $R=P/Q$ est une fraction rationnelle **à coefficients réels**, en général sans pôle réel, et $k>0$. Variante fréquente : $\int_0^{+\infty}$ d'une fonction **paire**, qu'on ramène à $\frac12\int_{\R}$. L'énoncé impose parfois la fonction auxiliaire et le contour (« en intégrant $f(z)=\dots$ sur le bord du demi-disque supérieur »), parfois rien du tout.

Mots-clés : *demi-disque*, *demi-cercle $C_R^+$*, *montrer que l'intégrale sur l'arc tend vers $0$*, *transformée de Fourier*, *$|e^{iz}|\le1$ pour $\Im z\ge0$*, *pôles de partie imaginaire positive*.

## Options

### [x] Formule des résidus sur le bord d'un demi-disque — [[ch02-formule-residus-pratique]]
**Quand.** $f$ est méromorphe sur $\C$ (ou sur un ouvert simplement connexe contenant le demi-disque fermé $\bar U_R=\{|z|\le R,\ \Im z\ge0\}$), sans pôle sur le lacet $\Gamma_R=[-R,R]\vee C_R^+$, où $C_R^+:\theta\in[0,\pi]\mapsto Re^{i\theta}$ et où $R$ est **strictement plus grand que le module de tous les pôles**.
**Justification.** $\Gamma_R$ est un lacet simple parcouru dans le sens direct : les pôles $s$ avec $\Im s>0$ ont indice $1$, ceux avec $\Im s<0$ sont dans la composante non bornée de $\C\setminus\Gamma_R$ et ont indice $0$ ([[ch02-indice-entier-localement-constant]]). D'où $\int_{\Gamma_R}f=2i\pi\sum_{\Im s>0}\Res_s(f)$, quantité **indépendante de $R$** dès que $R$ est assez grand.
**Pièges.** Le poly présente cette forme « sans preuve, à justifier au cas par cas » (poly, Formule (II.6.1), p. 48) : écrire une phrase sur l'indice (lacet simple direct, ou homotopie vers un cercle, [[ch02-indice-invariance-homotopie]]). Ne compter **que** les pôles du demi-plan supérieur.

### [x] Calcul des résidus en un pôle simple — [[ch02-residu-pole-simple]]
**Quand.** Les pôles sont les zéros de $Q$. Pour un zéro **simple** $s$ de $Q$ : $\Res_s\big(\tfrac{P}{Q}e^{ikz}\big)=\dfrac{P(s)e^{iks}}{Q'(s)}$, ou $\lim_{z\to s}(z-s)f(z)$.
**Justification.** Remarque II.4.12 : $\Res_s(fg)=f(s)\Res_s(g)$ si $g$ a un pôle simple en $s$ et $f$ est holomorphe en $s$ (poly, Remarque II.4.12, p. 46).
**Pièges.** Pôle **multiple** (par exemple $(x^2+1)^2$ au dénominateur) : la formule $\lim(z-s)f(z)$ est fausse. Utiliser $\Res_s(f)=\frac1{(m-1)!}\lim_{z\to s}\frac{d^{m-1}}{dz^{m-1}}\big[(z-s)^mf(z)\big]$ pour un pôle d'ordre $m$ (conséquence immédiate du développement de Laurent [[ch02-laurent-developpement]], à justifier en une ligne car hors poly), ou développer directement.

### [x] Majoration longueur × sup sur l'arc — [[ch01-longueur-majoration-integrale]]
**Quand.** $\deg Q\ge\deg P+2$, donc $|R(z)|\le C/|z|^2$ pour $|z|$ grand ; éventuellement multiplié par $e^{ikz}$ avec $k>0$.
**Justification.** $\big|\int_{C_R^+}f\big|\le L(C_R^+)\sup_{C_R^+}|f|=\pi R\sup_{C_R^+}|f|\le\pi C/R\to0$. Avec $e^{ikz}$, $k>0$ : $|e^{ikz}|=e^{-k\Im z}\le1$ sur le demi-plan supérieur, donc la même majoration marche (c'est exactement ce que fait le poly dans l'Exemple II.6.1).
**Pièges.** Écrire une **minoration explicite** du dénominateur sur $C_R^+$, par l'inégalité triangulaire renversée : $|z^2+a^2|\ge R^2-a^2$ pour $|z|=R>a$ ; un « $\sim$ » sans justification n'est pas une majoration. Si $\deg Q=\deg P+1$, longueur × sup donne seulement $O(1)$ : il faut le lemme de Jordan (option suivante).

### [x] Modèle de l'intégrale de Fourier et lemme de Jordan — [[ch02-exemple-integrale-fourier]]
**Quand.** L'intégrande contient $\cos(kx)$ ou $\sin(kx)$ : on intègre $f(z)=R(z)e^{ikz}$ (demi-plan **supérieur** si $k>0$) puis on prend la partie réelle ou imaginaire, ce qui est licite parce que $R$ est réelle sur $\R$. Si seulement $\deg Q=\deg P+1$ (par exemple $x\sin x/(x^2+1)$), on a besoin du lemme de Jordan.
**Justification.** Lemme de Jordan (hors poly, à redémontrer sur la copie) : par concavité, $\sin\theta\ge2\theta/\pi$ sur $[0,\pi/2]$, donc
$$\int_0^\pi e^{-kR\sin\theta}\,d\theta=2\int_0^{\pi/2}e^{-kR\sin\theta}\,d\theta\le2\int_0^{\pi/2}e^{-2kR\theta/\pi}\,d\theta\le\frac{\pi}{kR},$$
d'où, en paramétrant $z=Re^{i\theta}$ :
$$\Big|\int_{C_R^+}g(z)e^{ikz}\,dz\Big|\le R\,\sup_{C_R^+}|g|\int_0^\pi e^{-kR\sin\theta}\,d\theta\le\frac\pi k\,\sup_{C_R^+}|g|\xrightarrow[R\to+\infty]{}0$$
dès que $\sup_{C_R^+}|g|\to0$.
**Pièges.** Ne **jamais** intégrer $R(z)\cos(kz)$ : $|\cos(kz)|$ croît comme $\frac12e^{k|\Im z|}$ dans **les deux** demi-plans. Si $k<0$, fermer par le bas : lacet parcouru dans le sens indirect, facteur $-2i\pi$, pôles de partie imaginaire $<0$. Jordan ne fournit que $\lim_{R\to\infty}\int_{-R}^R$ ; la convergence de l'intégrale impropre (ici seulement semi-convergente) se justifie à part (intégration par parties).

### [ ] Contour en trou de serrure — [[ch02-exemple-trou-de-serrure]]
**Pourquoi ce n'est pas l'outil ici.** L'intégrale porte sur tout $\R$ et l'intégrande se prolonge en une fonction méromorphe sur $\C$ : aucune coupure n'est nécessaire, le demi-disque suffit et le calcul est deux fois plus court.
**Quand il le serait.** Intégrale sur $]0,+\infty[$ d'une fonction **non paire**, ou contenant $x^\alpha$ ($\alpha\notin\Z$) ou $\ln x$ : voir [[rfx-res-integrale-trigo-coupure]].

### [ ] Holomorphie sous le signe intégrale — [[ch01-holomorphie-sous-integrale]]
**Pourquoi ce n'est pas l'outil ici.** Ce théorème établit qu'une intégrale à paramètre $F(z)=\int\varphi(z,x)\,dx$ est holomorphe en $z$ ; il ne donne pas la **valeur** d'une intégrale numérique.
**Quand il le serait.** Pour étendre une formule obtenue pour un paramètre réel $a>0$ à $a$ complexe (les deux membres sont holomorphes en $a$ et coïncident sur $]0,+\infty[$, puis prolongement analytique [[ch01-prolongement-analytique]]), ou pour dériver une formule connue par rapport au paramètre.

## Démarche

1. **Convergence d'abord.** Si $Q$ n'a pas de zéro réel et $\deg Q\ge\deg P+2$ : convergence absolue. Si $\deg Q=\deg P+1$ avec un facteur $\cos(kx)$ ou $\sin(kx)$ : semi-convergence, à justifier par intégration par parties. Si $Q$ a un zéro réel : divergence, sauf compensation (comme $\sin x/x$) → aller en 7.
2. **Choisir $f$.** Sans trigonométrie : $f=R$. Avec $\cos(kx)$ ou $\sin(kx)$ et $k>0$ : $f(z)=R(z)e^{ikz}$, puis $\Re$ ou $\Im$. Avec $\cos^2$, $\sin^2$, $\cos(ax)\cos(bx)$ : linéariser d'abord ($\cos^2x=\frac{1+\cos2x}2$, la constante se traite à part).
3. **Pôles.** Factoriser $Q$, lister les pôles de partie imaginaire $>0$ et leur ordre, calculer les résidus ([[ch02-residu-pole-simple]], ou formule d'ordre $m$, ou Laurent).
4. **Contour.** $\Gamma_R=[-R,R]\vee C_R^+$ avec $R>\max|s|$ ; justifier les indices ($1$ en haut, $0$ en bas) ; appliquer [[ch02-formule-residus-pratique]].
5. **Arc.** Si $|f(z)|\le C/|z|^2$ sur $C_R^+$ : longueur × sup. Sinon, si $f=g\,e^{ikz}$ avec $\sup_{C_R^+}|g|\to0$ : lemme de Jordan, **redémontré**. Sinon : changer de fonction ou de contour (rectangle de hauteur $\pi$ pour $1/\cosh x$ ou $e^{ax}/(1+e^x)$, par exemple).
6. **Limite et identification.** Faire $R\to+\infty$, prendre $\Re$ ou $\Im$, utiliser la **parité** pour passer à $\int_0^{+\infty}$ et comme vérification (la partie impaire doit donner $0$, le résultat d'une intégrale de fonction positive doit être $>0$).
7. **Pôle simple réel $x_0$** (valeur principale, hors poly) : contourner $x_0$ par un petit demi-cercle $\gamma_\eps$ au-dessus de $x_0$, parcouru dans le sens indirect. Si $f(z)=\frac{a}{z-x_0}+h(z)$ avec $h$ bornée près de $x_0$, alors $\int_{\gamma_\eps}\frac{a\,dz}{z-x_0}=-i\pi a$ et $\big|\int_{\gamma_\eps}h\big|\le\pi\eps\sup|h|\to0$ : à rédiger sur la copie.

## Pièges

* Utiliser $\cos(kz)$ au lieu de $e^{ikz}$, ou $e^{ikz}$ avec $k<0$ en fermant par le haut.
* Ne pas écrire « pour $R>\max|s|$ » : le correcteur attend que l'on dise pourquoi seuls certains pôles sont à l'intérieur.
* Compter les pôles du demi-plan inférieur, oublier le facteur $2i\pi$, ou oublier le facteur $\frac12$ quand on passe à $\int_0^{+\infty}$.
* Confondre $\lim_{R\to\infty}\int_{-R}^R$ et $\int_{-\infty}^{+\infty}$ : $\int_{-R}^R\frac{x}{x^2+1}\,dx=0$ pour tout $R$, alors que l'intégrale impropre diverge.
* Prendre la partie réelle d'un résultat alors que $R$ n'est pas réelle sur $\R$ (coefficients complexes) : il faut alors combiner $e^{ikz}$ et $e^{-ikz}$ séparément, chacune avec son demi-plan.
* Invoquer « le lemme de Jordan » comme un résultat du cours : il n'est pas dans le poly, la majoration $\sin\theta\ge2\theta/\pi$ doit figurer sur la copie.

## Mini-exemple

*Énoncé.* Calculer $I=\displaystyle\int_{-\infty}^{+\infty}\frac{x\sin x}{x^2+1}\,dx$.

*Solution.* **Convergence.** Pour $X>1$, une intégration par parties donne $\int_1^X\frac{x\sin x}{x^2+1}dx=\Big[-\frac{x\cos x}{x^2+1}\Big]_1^X+\int_1^X\cos x\,\frac{1-x^2}{(x^2+1)^2}dx$, et $\frac{1-x^2}{(x^2+1)^2}=O(1/x^2)$ est intégrable : l'intégrale converge (l'intégrande est pair).
**Fonction et résidu.** $f(z)=\dfrac{z\,e^{iz}}{z^2+1}$ est méromorphe sur $\C$, de pôles simples $\pm i$. Pour $R>1$, seul $i$ est dans le demi-disque, et $\Res_i(f)=\dfrac{i\,e^{i\cdot i}}{2i}=\dfrac1{2e}$, donc $\int_{\Gamma_R}f=2i\pi\cdot\frac1{2e}=\frac{i\pi}e$.
**Arc.** Ici $\deg Q=\deg P+1$ : longueur × sup ne suffit pas. Avec $g(z)=z/(z^2+1)$, $\sup_{C_R^+}|g|\le\frac{R}{R^2-1}\to0$, donc le lemme de Jordan donne $\int_{C_R^+}f\to0$.
**Conclusion.** $\lim_{R\to\infty}\int_{-R}^R\frac{x e^{ix}}{x^2+1}dx=\frac{i\pi}e$. La partie réelle $\int_{-R}^R\frac{x\cos x}{x^2+1}dx$ est nulle par imparité (cohérent), et la partie imaginaire donne $I=\dfrac{\pi}{e}\approx1{,}156$.
